
// const fs = require('fs');

// // runs the generating page function from page-template.js
// const generatePage = require('./src/page-template.js');

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        }
    ])
    .then(answers => console.log(answers));

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