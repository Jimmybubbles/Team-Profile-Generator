//import inquirer
const inquirer = require("inquirer")
//import fs
const fs = require("fs");


//import the worker classes
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
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
            message:"what is your engineers email address?",
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

function compileTeam() {
    const htmlArray = []
    const htmlStart = `
    
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>${teamArray[0]}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="">
    </head>

    <body>

    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4 text-center">${teamArray[0]}</h1>
      <p class="lead text-center">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </div>
    </div>

        
        
    <div class="container px-4 py-5" id="feature-3">
    <div class="row g-4 py-5 row cols-1 row-cols-lg-3">  

        `

        htmlArray.push(htmlStart);

        for(let i = 1; i < teamArray.length; i++) {

            let object = `
            <div class = "team-member-card">
                <div class="feature col border border-primary">
                    <h2>${teamArray[i].name}</h2>
                    <h2>${teamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>Employee ID: ${teamArray[i].id}</p>
                <p>Email : <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a><p>  
            `
            //if the selection officeNumber is chosen
            if(teamArray[i].officeNumber) {
                object += `
                <p>${teamArray[i].officeNumber}</p>
                `
            }
            //if the selection github is chosen
            if(teamArray[i].github) {
                object += `
                <p>Github: <a href="http://github.com/${teamArray[i].github}">${teamArray[i].github}</a><p>
                `
            }
            //if the selection school is chosen
            if(teamArray[i].school) {
                object += `
                <p>School: ${teamArray[i].school}</p>
                `
            }
            object += `
            </div>
            </div>
            `    
            htmlArray.push(object)
        }

        const htmlEnd = `
        </div>
        </body>
        </html>
        `
        htmlArray.push(htmlEnd);
    
        // create the html 
        fs.writeFile(`./generateHtml/${teamArray[0]}.html`, htmlArray.join(""), function (err) {
        console.log("the html has been generated.")

        })

}

initialPrompt()


