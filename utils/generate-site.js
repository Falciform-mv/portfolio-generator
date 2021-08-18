
const fs = require('fs');

// write a file function that returns a promise
// accepts two functions as parameters
const writeFile = fileContent => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'file created'
      });
    });
  });
};


const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'stylesheet created'
      });
    });
  });
};

module.exports = { writeFile, copyFile };