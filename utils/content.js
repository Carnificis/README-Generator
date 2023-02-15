function content(data){
    console.log(data)
    return `

# Project: ${data.title}
${renderBadge(data.license)}



## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Contributor](#contributor)
4. [Testing](#testing)
5. [Usage](#usage)
6. [Github](#github)
7. [Email](#email)
8. [License](#license)



### Description
${data.description}

### Installation
${data.installation}

### Project Contributor
${data.projectcontributor}

### Testing
${data.testing}
### Usage
${data.usage}

### Github
${data.github}

### Email
Feel free to reach me at 
${data.email}
for any questions regarding this project.

### License
${data.license}
${renderLicenseInfo()}

`

}

function renderBadge(license){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

function renderLicenseInfo(){
    return `[License Info](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`
}
module.exports = content