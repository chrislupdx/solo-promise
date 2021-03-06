const fs = require('fs');

new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    fs.readFile('./package.json', { encoding: 'utf8' }, (err, data) => {
      if(err) return reject(err);
    });
    resolve(data);
  });
});

fsPromises.readFile('./1_promises.md', { encoding: 'utf8' })
  .then(data => {
    return fsPromises.readFile('./package.json');
  })
  .then(data => console.log(data.toString));
