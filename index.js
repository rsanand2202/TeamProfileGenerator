const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

function 

menu =() => {
    createManager = () => {
        inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter team manager’s name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the employee id?'
                },
                {
                    type: 'input',
                    name: 'email', // done
                    message: "What is their email address?"
                },
                {
                    type: 'input',
                    name: 'address', // done
                    message: 'What is their home address?'
                },
                {
                    type: 'input',
                    name: 'officeNumber', // done
                    message: 'What is their office number?'
                },
            ]
        )
        .then(({name,id,email,officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            console.log(manager);
        })
        

    },
    createManager();
    
   createEngineer = () =>{
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is the Engineer name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?'
    },
    {
        type: 'input',
        name: 'email', // done
        message: "What is their email address?"
    },
    {
        type: 'input',
        name: 'github', // done
        message: 'What is their github?'
    },])
    .then(({name,id,email,github}) => {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
    })
   },
   createEngineer();
   createIntern = () =>{
    inquirer
    .prompt([
         {
        type: 'input',
        name: 'name',
        message: 'What is the intern name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee id?'
    },
    {
        type: 'input',
        name: 'email', // done
        message: "What is their email address?"
    },
    {
        type: 'input',
        name: 'school', // done
        message: 'What school do they attend?'
    },])
    .then(({name,id,email,school}) => {
        const intern = new Intern(name, id, email,school);
        console.log(intern);
    })

   }
   
   
   createIntern();

}
    
menu();