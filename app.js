"use strict";

const inquirer = require("inquirer");
const prompt = require("prompt");
const fs = require("fs");

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "name",
      message: "What is your posiiton?"
    }
  ]);
}
