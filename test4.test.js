
const capitalLetter = require('./test4');

describe('These are tests for capitalLetter function', () => {
  it('"harold" capitalLetter' , () => {
    expect(capitalLetter('harold')).toMatch('Harold');
  });

  it('"microverse" capitalLetter', () => {
    expect(capitalLetter('microverse')).toMatch('Microverse');
  });

  it('Empty String capitalLetter ', () => {
    expect( capitalLetter('')).toThrowError('This is a failed test');// Fail Test
  });

  it('Number capitalLetter ', () => {
    expect(capitalLetter('19')).toThrowError('This is a failed test');// Fail Test
  });
});
