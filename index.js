const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

function appMenu() {

  function createManager() {
    console.log("Enter your team's information");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid name";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid ID number";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid Office Number";
        }
      }
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",
        validate: answer => {
          if (answer !== "") {
              return true;
            }
          return "Please enter a valid ID";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a GitHub username.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your intern's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name";
        }
      },
      {
        type: "input",
        name: "internId",
        message: "What is your intern's id?",
        validate: answer => {
          if (answer !== "") {
              return true;
            }
          return "Please enter a valid ID number";
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your intern's email?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid email address.";
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is your intern's school?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a school";
        }
      }
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      createTeam();
    });
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}

appMenu();
