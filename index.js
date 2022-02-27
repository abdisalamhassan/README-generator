const fs = require('fs');
const inquirer = require('inquirer')


const generateMarkdown = require('./generateMarkdown');




//array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "Title",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        } 
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
        validate: InstallationInput => {
            if (InstallationInput) {
                return true;
            } else {
                console.log('Please enter the steps required');
                return false;
            }
        } 
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage",
        validate: UsageInput => {
            if (UsageInput) {
                return true;
            } else {
                console.log('Please enter instructions');
                return false;
            }
        } 
    },
    {
        type: "input",
        message: "Contribution",
        name: "Contibutors",
        validate: ContributorsInput => {
            if (ContributorsInput) {
                return true;
            } else {
                console.log('Please contributors');
                return false;
            }
        } 
    },
    {
        type: "list",
        message: "Select applicable license",
        choices: [
            "MIT",
            "GPL",
            "Apache",
        ],
        name:"License",

        validate: LicenseInput => {
            if (LicenseInput) {
                return true;
            } else {
                console.log('Please select a license');
                return false;
            }
        } 
    },
    {
        type: "input",
        message: "Contact info for any questions",
        name: "Contact",
        validate: QuestionsInput => {
            if (QuestionsInput) {
                return true;
            } else {
                console.log('Please enter contact info');
                return false;
            }
        } 
    },
    {
        type: "input",
        message: "Your Github username",
        name: "Username",
        validate: UsernameInput => {
            if (UsernameInput) {
                return true;
            } else {
                console.log('Please enter Github');
                return false;
            }
        } 
    },
];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}
inquirer.prompt(questions).then(function(answers){
  var generateString = generateMarkdown(answers)
  console.log(generateString)
  writeToFile('./README.md',generateString)
})


  
  