#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require("chalk");
const clear = require('clear');
const inquirer = require('inquirer');
const resumeData = require('./resumeData.json');

let blueColor = chalk.blue.bold;
let redColor = chalk.red.bold;

var prompts = {
    type: "list",
    name: "option",
    message: "What would you like to know about me?",
    choices: [...Object.keys(resumeData), "Exit"]
  };

(function(){
    clear();    
    console.log(
        chalk.cyan.bold(
            figlet.textSync('      Sunny Setia     ',{
            horizontalLayout:'full',
        }))
    );
    console.log("\n")
    console.log(chalk.red.bold(" \u{1F916}  Full Stack Developer") + " \n\n + Believes in possibilities and always trying to look at the positive, brighter side of the story. \n\n • Have good experience in fullstack web development. \n • Have e2e knowledge of IoT applications including edge computing and cloud.")
    console.log("\n")    
    menu();  
})();

function menu(){
    inquirer.prompt(prompts).then(choice=>{
        let selectedOption = choice.option;
        if(selectedOption==="Exit"){
            console.log(redColor("\nThank you for showing interest. Have a great day !"));
            return;
        }
        console.log('\n====================================\n');
        
        resumeData[`${selectedOption}`].forEach(data => {
            console.log("\u{1F538}   "+ blueColor(data));
        });
        console.log('\n====================================\n');
        
        inquirer.prompt({
        type: "list",
        name: "option",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
        })
        .then(choice => {
            if (choice.option == "Back") {
                menu();
            } else {
                console.log(redColor("\nThank you for showing interest. Have a great day !"));
                return;
            }
        });

    })
}