//import inquirer
const inquirer = require("inquirer")
//import fs
const fs = require("fs");


//import the worker classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// create a empty array for the data to populate to

let teamArray = [];

function initialPrompt() {
    inquirer.prompt([
        {
            message: "Please input the name of your team",
            name: "teamName",
        }
    ])
    .then(function(data){
        const teamName = data.teamName
        // add teamName to the teamArray 
        teamArray.push(teamName)
        //chain the next function
        addManager();
    })
};

// function for the add manager

function addManager() {
    inquirer.prompt([
        {
            
            message:"What is the name of your Manager?",
            name:"name",
            
        },
        {
            
            message:"what is the your managers email address?",
            name:"email",
            
        },
        {
            message:"what is the your team managers office number?",
            name:'officeNumber',
        }
    ])

    .then(function(data) {
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        teamArray.push(teamMember)
        addTeamMember()
        
    })
}

// function for selecting the team members
function addTeamMember() {
    inquirer.prompt([
        {
            type:"list",
            message:"Would you like to add members to your team?",
            choices:["Yes, add an engineer", "Yes, add an intern", "no, the team is complete"],
            name:"addMemberData",
        }
    ])
    // switch statement for the 
    .then(function(data) {

        switch(data.addMemberData) {
            case "Yes, add an engineer":
            addEngineer();
            break;

            case "Yes, add an intern":
            addIntern();
            break;
            
            case "no, the team is complete":
            compileTeam();
            break;
        }
    });
}

// need to make a list function that will let selection of the team members 

function addEngineer() {
    inquirer.prompt([
        {
            message:"What is your Engineers name?",
            name:"name",
        },
        {
            message:"what is your engineers email address??",
            name:"email",
        },
        {
            message:"What is your engineers Github?",
            name:"github",
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = teamArray.length + 1
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        teamArray.push(teamMember)
        addTeamMember()
    
    });
}

function addIntern() {
    inquirer.prompt([
        {
            message:"what is your interns name?",
            name: "name",
        },
        {
            message:"what is your interns email?",
            name: "email",
        },
        {
            message:"what is your interns school?",
            name:"school",
        }
    ])
    .then(function(data) {
        const name = data.name
        const id = teamArray.length + 1
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        teamArray.push(teamMember)
        addTeamMember()
    });
}

initialPrompt()

function compileTeam() {
    console.log(teamArray)
    
}



