const fs = require("fs");
const inquirer = require("inquirer");
const readme = require("./readme.js");
const { licenses } = require("./license-badges.js");

console.log("\x1b[1m\x1b[32mWelcome to Readme Maker!\x1b[36m\nAnswer the prompts below to build out your new readme.\nIf you leave a section blank, it will be omitted from the final readme.\nThe table of contents will only appear if there are more than 5 sections.", "\x1b[0m");


const licenseChoices = [];
licenses.forEach(license => {
	licenseChoices.push({
		name: license.displayName,
		value: license,
		short: license.shortName
	});
});

inquirer.prompt([
	{
		type: "input",
		name: "title",
		message: "What is the title of your application?",
	},
	{
		type: "input",
		name: "description",
		message: "Please describe the functionality of your project.",
	},
	{
		type: "input",
		name: "installation",
		message: "Please explain how to install your project.",
	},
	{
		type: "input",
		name: "usage",
		message: "Please explain how to use your project.",
	},
	{
		type: "list",
		name: "license",
		message: "Please choose one license.",
		choices: licenseChoices,
	},
	{
		type: "input",
		name: "contribution",
		message: "Please explain how people should contribute to your project.",
	},
	{
		type: "input",
		name: "tests",
		message: "Please explain how to use your tests.",
	},
	{
		type: "input",
		name: "githubUsername",
		message: "Please enter your github username.",
	},
	{
		type: "input",
		name: "email",
		message: "Please enter an email address people can contact you at.",
	},
]).then(answers => {
	// Format the contact information.
	{
		const { githubUsername, email } = answers;
		/** @type {string[]} Contact information. */
		const questions = [];

		if (githubUsername != "") {
			questions.push(`My github: [${githubUsername}](https://github.com/${githubUsername})\n\n`);
		}
		if (email != "") {
			questions.push(`Email me at: <${email}> if you have any questions.\n\n`);
		}
		answers.questions = questions.join("");
	}
	
	// The readme contents
	const text = readme.makeReadme(answers);

	fs.mkdir("out", { recursive: true }, error => {
		if (error)
			console.error(error)
		else {
			fs.writeFile("out/README.md", text, error => { if (error) console.error(error); });
			console.log("\x1b[1m","\x1b[34m","Your new readme is waiting for you in ./out/README.md!", "\x1b[0m")
		}
	})
}).catch(error => console.error(error));


