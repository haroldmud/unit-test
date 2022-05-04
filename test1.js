function stringLength(string) {
    if (string.length < 1 && string.length > 10) {
      throw new Error('The string doesn\'t match the condition');
    } else {
      return string.length;
    }
  }


module.exports = stringLength