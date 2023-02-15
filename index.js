const inquirer = require("inquirer")
const fs = require("fs")
const content = require("./utils/content")
const questions = [
    {
        type: "input",
        message:"Enter project Title",
        name:"title"
    },
    {
        type: "input",
        message:"Enter project Description",
        name:"description"
    },
    {
        type: "input",
        message:"Enter project Contributor",
        name:"projectcontributor"
    },
    {
        type: "input",
        message:"Enter project Installation",
        name:"installation"
    },
    {
        type: "input",
        message:"Enter project Testing requirements",
        name:"testing"
    },
    {
        type: "input",
        message:"Enter project Usage",
        name:"usage"
    },
    {
        type: "input",
        message:"Enter project Github username",
        name:"github"
    },
    {
        type: "input",
        message:"Enter project Email",
        name:"email"
    },
    {
        type: "list",
        message:"Enter project License",
        name:"license",
        choices:["MIT","ISC","Apache 2.0","GPL","No License"]
    },
]


function start(){
    inquirer.prompt(questions)
    .then(response => {
       // console.log(response)
        generateMarkDown("README.md",response)
    })
}
function generateMarkDown(filename,data){
fs.writeFileSync(filename,content(data),function(err){
    if(err) throw err;
})
}
start()