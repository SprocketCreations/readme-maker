const fs = require("fs");
const inquirer = require("inquirer");
const readme = require("./readme.js");

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
		name: "ussage",
		message: "Please explain how to use your project.",
	},
	{
		type: "list",
		name: "license",
		message: "Please choose one license.",
		choices: [
			{ name: "Apache 2.0", value: "Apache 2.0", short: "Apache 2.0", },
			{ name: "MIT", value: "MIT", short: "MIT", },
			{ name: "Mozilla Public License 2.0", value: "MPL 2.0", short: "MPL 2.0", },
			{ name: "The Unlicense", value: "Unlicense", short: "Unlicense", },
		],
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
		name: "questions",
		message: "Please explain how people can contact you about questions.",
	},
]).then(answers => {
	console.log(answers);
}).catch(error => console.error(error));

// const text = readme.makeReadme({
// 	title: "Readme Generator",
// 	description: "Can generate a readme file using prompts.",
// 	installation: "N/A",
// 	usage: "Run `node index.js`, and answer all the prompts. A README.md file will be created in the same directory.",
// 	license: "MIT",
// 	contribution: "no",
// 	tests: "There are none lol.",
// 	questions: "sevenflags57@gmail.com"
// });
// fs.mkdir("out", { recursive: true }, error => {
// 	if (error)
// 		console.error(error)
// 	else
// 		fs.writeFile("out/README.md", text, error => { if (error) console.error(error); });
// })


