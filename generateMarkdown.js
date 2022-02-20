//function to generate markdown for README 
function generateMarkdown(data) {
    return `

    # ${data.Title}

    ## Table of Contentes
    *[Description](#description)
    *[Installation instructions](#installation)
    *[Usage](#usage)
    *[License](#License)
    *[Contribution](#contibutors)
    *[Test](#test)
    *[Questions](#questions)
    
    ## Description
    ${data.Description}

    ##Installation instructions
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ## License
    ${data.License}

    ## Contributors
    ${data.Contributors}

    ## Questions
    Contact me:

    Github:[${data.Username}](https://github.com/abdisalamhassan)
`;}

module.exports = generateMarkdown;