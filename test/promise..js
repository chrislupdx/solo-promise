const fs = require('fs');
const readPromise = require('./readPromise');

describe('read promise', () => {
  it('reads a file', () => {
    return readPromise('./test.txt')
      .then(data => {
        expect(data).toEqual('hi\n');
      });
  });
});


// describe('promise function tests', () => {
//   afterEach(() => {
//   });

//   it('bas')

// })
// ;
