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
}

// function for the add manager

function addManager() {
    inquirer.prompt([
        {
            message:"What is the name of your Manager?",
            name:"name",
        },
        {
            message:"what is the your managers Email?",
            email:"email",
        },
        {
            message:"what is the your team managers office number?",
            name:'officeNumber'
        }
    ])

    .then(function(data) {
        const name = data.name
        const id = 1
        const email = data.email
        const officeNumber = data.officeNumber
        const teamMember = new Manager(name, id, email, officeNumber)
        teamArray.push(teamMember)
    })
}