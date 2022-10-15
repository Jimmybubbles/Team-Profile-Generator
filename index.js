const inquirer = require("inquirer")

const questions = [
    {
        name: 'FirstName',
        type: 'input',
        message: 'what is your first name',


    },
    {
        name: 'LastName',
        type: 'input',
        message: 'what is your last name'

    },

    {
        name: 'Id',
        type: 'number',
        message: 'employee ID number'

    },

    {

        name: 'Email',
        type: 'Email',
        message: 'what is your email address?'

    },

    {
        name: 'OfficeNumber',
        type: 'number',
        message: 'what is your office number?'
    },

    {

        name: 'AddEmployee',
        type: 'rawlist',
        choices: ['engineer', 'intern'],
        message: 'please choose a employee role.',

    },
]

    inquirer.prompt(questions).then((answer) => {
        console.log(answer);
    });
