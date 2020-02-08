"use strict";
const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
