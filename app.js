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
        message: "What is your id?"
      },
      {
        type: "input",
        name: "email",
        message: "what is your email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what is your office number"
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
