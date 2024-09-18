const inquirer = require("inquirer");
const helper = require("./utils/generateMarkdown.js")
const fs = require('fs');
const generateREADme = () =>
    `

`

inquirer
    .prompt([
        {
            type: "input",
            message: "what is the title of your project",
            name: "title",
        },
        {
            type: "input",
            message: "Provide a description of your project.",
            name: "description",
        },
        {
            type: "input",
            message: "Provide installation istruction for the project",
            name: "installation",
        },
        {
            type: "input",
            message: "Provide usage information for the pproject.",
            name: "usage",
        },
        {
            type: "input",
            message: "Provide the testing instruction for the project.",
            name: "test",
        },
        {
            type: "input",
            message: "Provide the contribution guidelines for this project.",
            name: "contribution",
        },
        {
            type: "input",
            message: "what is your github username.",
            name: "Githubuser",
        },
        {
            type: "input",
            message: "what is your email address.",
            name: "email",
        },
        {
            type: "list",
            message: "choose the perfered licensing information for the project.",
            name: "license",
            choices: ["None", "GNU", "MIT", "Creative Commons", "Choose a License"],
        },
    ])

    .then((answers) => {
        const READmeContent = generateREADme(answers);

        fs.writeFile('utils/READme.md', READmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created READme.md!')
        );
    });

function init() {
    return inquirer.prompt(questions);
}

init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then((readmeInfo) => {
        return writeToFile("./dist/README.md", readmeInfo);
    })
    .catch(err => {
        console.log(err);
    })