function capitalLetter(string) {
  if (string) {
    const strg = string.split('');
    strg[0] = strg[0].toUpperCase();
    return strg.join('');
  }
  throw new Error('some error occurred.');
}

module.exports = capitalLetter;