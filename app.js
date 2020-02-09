"use strict";

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
