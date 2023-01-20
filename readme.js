const licenses = require("./license-badges.js");

/**
 * @param {object} sections The sections to add to the table of contents.
 * @returns {string} a markdown table of contents ready to be pasted into a .md file.
 */
const makeTableOfContents = (sections) => {
	/** @type {string[]} The string. Use `.push()` to add more text. */
	const text = [];

	for (const section in sections) {
		if (sections[section]) {
			text.push(`- [${section}](#${section.toLocaleLowerCase()})\n`);
		}
	}

	// Return all the entries joined together.
	return text.join("");
};

/**
 * Creates a markdown string ready to be written to a file using the given settings.
 * 
 * Omitting any of these parameters will cause that section to be skipped.
 * @param {Object} obj an object.
 * @param {string} obj.title The title of the project this README is for.
 * @param {string} obj.description An explanation of the details of the project.
 * @param {string} obj.installation Step by step explanation of how to install the project.
 * @param {string} obj.usage Proved instructions and examples on use.
 * @param {string} obj.license What license to add a badge for.
 * @param {string} obj.contribution Explanation on how to contribute to the problem.
 * @param {string} obj.tests Instructions on how to run any tests.
 * @param {string} obj.questions Contact information, such as github username and email.
 * @returns {string} a markdown readme string ready to be written to a file.
 */
const makeReadme = ({
	title,
	description,
	installation,
	usage,
	license,
	contribution,
	tests,
	questions }) => {
	// Map of all the sections, and whether they are present.
	const isPresent = section => section !== null;
	const sections = {
		Title: isPresent(title),
		Description: isPresent(description),
		Installation: isPresent(installation),
		Usage: isPresent(usage),
		License: isPresent(license),
		Contribution: isPresent(contribution),
		Tests: isPresent(tests),
		Questions: isPresent(questions),
	};

	/** @type {string[]} The README string. Use `.push()` to add more text. */
	const readme = [];
	// Push the badge.
	readme.push(`${licenses[license]}/n`);

	// Push the title.
	readme.push(`# ${title}\n\n`);

	// Push the description.
	readme.push(`## Description\n\n${description}\n\n`);

	// If the readme is long, add a table of contents.
	readme.push(`## Table of Contents\n\n${makeTableOfContents(sections)}\n\n`);

	// Push the installation instructions.
	readme.push(`## Installation\n\n${installation}\n\n`);

	// Push the usage instructions.
	readme.push(`## Usage\n\n${usage}\n\n`);

	// Push the lisence.
	readme.push(`## License\n\n${licenses[license]}\n\n`);

	// Push the cedits.
	readme.push(`## Credit\n\n${credit}\n\n`);

	// Push the test usage instructions.
	readme.push(`## Tests\n\n${tests}\n\n`);

	// Push the contact information.
	readme.push(`## Contact\n\n${questions}\n\n`);

	// Return the joined README.
	return readme.join("");
};

module.exports = {
	makeReadme,
};