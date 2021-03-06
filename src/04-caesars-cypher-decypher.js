/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function isUpperCase(str) {
  return str === str.toUpperCase();
}

const deCypher = (str, key) => {
  key %= 26;
  if (str === -1) return -1;
  let decipher = '';

  // decipher each letter
  for (let i = 0; i < str.length; i++) {
    const inputCode = str.charCodeAt(i);

    if (!str[i].match(/^[A-Za-z\s]+$/i)) { // non letter
      console.log(str[i]);
      return 'Non letter present in message';
    }
    if (str[i] === ' ') { // space
      decipher += ' ';
    } else if (isUpperCase(str[i])) { // uppercase
      decipher += String.fromCharCode((inputCode - key + 65) % 26 + 65);
    } else { // lowercase
      let code = inputCode - key;
      if (code < 97) { code += 26; }
      decipher += String.fromCharCode(code);
    }
  }
  return decipher;
};

module.exports = deCypher;