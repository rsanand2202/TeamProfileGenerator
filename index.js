const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Choice = require("inquirer/lib/objects/choice");
const { clear } = require("console");
const workTeam = [];
const generateHtml = require("./lib/genarateHtml");
//option for new employee selection 
option = () =>{
    inquirer.prompt({
        type: 'list',
        name: 'newEmployee',
        message: 'You want to add another employee?',
        choices: ["engineer","intern",'done'],
        filter(value){
            return value.toLowerCase()}
    })
    .then(({newEmployee}) => {
        switch (newEmployee){
            case 'engineer':
                createEngineer();
                break;
            case 'intern':
                createIntern();
                break;
            case 'done':
                const htmlContent = generateHtml(workTeam);
                fs.writeFile('./dist/index.html', htmlContent,(err)=>{
                    err? console.log(err): console.log('Team created!!!!');      
                })
        }
    });
   
}    

//function which will question and assign to section
    createManager = () => {
        createEngineer = () =>{
            inquirer
            .prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter your engineer’s name'
            },
            {
                type: 'input',
                name: 'id',
                message: ' Please enter your engineer’s id'
            },
            {
                type: 'input',
                name: 'email', // done
                message: "Please enter your engineer’s email"
            },
            {
                type: 'input',
                name: 'github', // done
                message: 'Please enter your engineers GitHub username'
            }])
            .then(({name,id,email,github}) => {
                const engineer = new Engineer(name, id, email, github);
                workTeam.push(engineer);
                option();
            })
        }
        createIntern = () =>{
            inquirer
            .prompt([
                 {
                type: 'input',
                name: 'name',
                message: 'Please enter inter name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter Intern id'
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter intern's email"
            },
            {
                type: 'input',
                name: 'school', 
                message: 'Please anter school attanding'
            }])
            .then(({name,id,email,school}) => {
                const intern = new Intern(name, id, email,school);
                workTeam.push(intern);
                option();
            })
        
        }
        inquirer
        .prompt( 
            [
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter team manager’s name.'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: ' Please enter team manager id.'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter manager's email address."
                },
                
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is their office number?'
                },
            ]
        )
        .then(({name,id,email,officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            workTeam.push(manager);
            option();

    })
}
    createManager();
    

    