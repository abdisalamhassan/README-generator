//function to generate markdown for README 
function generateMarkdown(data) {
    return `

# ${data.Title}

## Table of Contents

-[Description](#description)
-[Installation ](#installation)
-[Usage](#usage)
-[License](#License)
-[Contribution](#contibutors)
-[Contact](#contact)

## Description
${data.Description}

## Installation 
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contibutors
${data.Contibutors}

## Contact
 ${data.Contact}

Github:[${data.Username}](https://github.com/abdisalamhassan)
`;}

module.exports = generateMarkdown;