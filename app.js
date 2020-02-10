"use strict";
//create variables for modules and other js files
const inquirer = require("inquirer");
const prompt = require("prompt");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const init = () => {
  promptManager();
  startHTML();
};
//create initial prompts in inquirer for mananger
function promptUser() {
  console.log("build your team");
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your manager name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your id #?"
      },
      {
        type: "input",
        name: "email",
        message: "what is your email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is your office number?"
      }
    ])
    .then(manager => {
      employees.push(
        new Manager(manager.name, manager.id, manager.email, manager.office)
      );
      addHTML(
        new Manager(manager.name, manager.id, manager.email, manager.office)
      );
      promptTeamMember();
    });
}
//prompts for intern
const promptIntern = () => {
  console.log("hey there, Intern!");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the  intern's ID #?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
      }
    ])
    .then(intern => {
      employees.push(
        new Intern(intern.name, intern.id, intern.email, intern.school)
      );
      addHTML(new Intern(intern.name, intern.id, intern.email, intern.school));
      promptTeamMember();
    });
};
//promts for engineer
const promptEngineer = () => {
  console.log("engineer!");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id"
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github"
      }
    ])
    .then(engineer => {
      employees.push(
        new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.github
        )
      );
      addHTML(
        new Engineer(
          engineer.name,
          engineer.id,
          engineer.email,
          engineer.github
        )
      );
      promptTeamMember();
    });
};
//promts to ask how many teammates and what type
const promptTeamMember = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of teammate would you like to add to your team?",
        name: "teamate",
        choices: ["Intern", "Engineer", "I don't want any more teammates"]
      }
    ])
    .then(function({ teamate }) {
      switch (teamate) {
        case "Intern":
          promptIntern();
          break;
        case "Engineer":
          promptEngineer();
          break;
        default:
          console.log(`Finished building team!`);
          endHTML();
      }
    });
};
//creating the html
const startHTML = () => {
  const topHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Template Engine</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <h1 class="title text-white mx-auto">My Team</h1>
        </nav>
        <div class="container my-4">
            <div class="row">`;
  fs.writeFile("./output/team.html", topHTML, function(err) {
    if (err) {
      console.error(err);
    }
  });
};
const endHTML = () => {
  const botHTML = `
            </div>
        </div>  
    </body>
</html>`;
  fs.appendFile("./output/team.html", botHTML, function(err) {
    if (err) {
      console.error(err);
    }
  });
};

init();
