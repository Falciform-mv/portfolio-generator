
// const fs = require('fs');

// // runs the generating page function from page-template.js
// const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return ('TELL ME')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username (required)',
            validate: gitHubInput => {
                if (gitHubInput) {
                    return true;
                } else {
                    return ('Need username plz')
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'would you like to add an About section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        
    ]);
}



const promptProject = portfolioData => {
  
    console.log(`
    =================
    add a new project
    =================
    `);

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: 'what is the name of your project? (required)',
            validate: projName => {
                if (projName) {
                    return true;
                } else {
                    return "gimme a project name"
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project (required)',
            validate: projDescription => {
                if (projDescription) {
                    return true;
                } else {
                    return "need project descrition bro"
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you build this project with? (check appicable)',
            choices: ['javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type:'input',
            name: 'link',
            message: 'enter the github link to your project'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};


    promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

    



// const pageHTML = generatePage(name, github);

// // const profileDataArgs = process.argv.slice(2);


// const [name, github] = profileDataArgs;


//     fs.writeFile('index.html', pageHTML, err => {
//         if (err) throw new Error(err);

//         console.log('portfolio complete!');
//     });

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('===========');


//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };



// printProfileData(profileDataArgs);