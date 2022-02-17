const { title } = require('process');

//node modules
const = require('inquirer');
cosnt fs = require('fs');

// inquirer to generate questions 
inquirer.prompt(
    [
       {
        type: "input",
        message: "What's the project title?",
        name: 'title',
        //validate property to check the user provided a value
        validate:(value)=>{if(value) {return true} else {return 'I need a value to continue'}},
       },
       { 
        type: 'input',
        message: 'How do you install your app?',
        name: "installation" ,
        validate:(value)=>{if(value){return true} else {return 'I need a value to continue'}},
       },
       { 
        type:'input',
        message: 'Any Credits?',
        name: "instructions" ,
        validate:(value)=>{if(value){return true} else {return 'I need a value to continue'}},
       },
       { 
        type:'input',
        message: 'How do you use your app?',
        name: "usage",
        validate:(value)=>{if(value){return true} else {return 'I need a value to continue'}},
       },
       { 
           //list of license
        type:'input',
        message: 'What license did you use?',
        name: "license",
        choices:['The MIT License', 'The GPL License','Apache License', 'GNU License', 'N/A'],
        validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
        },
       {
           type:'input',
           message: 'Github username',
           name: 'git',
           validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
       },
       {
           type: 'input',
           message: 'E-mail',
           name: 'email',
           validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
       }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
//template to be used
const template = '#  ${title}

* [Installation](#installation)
* [Usage](#usage)
* [contribution](#contribution)
* [Credits](#credits)
* [License](#license)
# Installation
${installation}
## Usage
${usage}
## contribution$
${contribution}
### Instructions
${instructions}
## Credits
${credit}
## License
${license}

# Contact
* Github : ${git}
*LinkedIn :${linkedin}
*E-mail :${email}' ;
//function to create readme using fs 
CreateNewFile(title,template);
}
);
//creating our CreateNewFile function
function createNewFile(filename,template){
//fs
fs.writeFile('./${filename.toLowerCase().split( ' ' ).join( )}.md',data(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Your ReadME has been generated");
})
}

//NOW LETS INSTALL OUR PACKAGES
    
