/* eslint-disable no-mixed-operators */
/* eslint-disable no-plusplus */
/* Credits to:
  https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/
*/

function isUpperCase(str) {
  return str === str.toUpperCase();
}

const cypher = (str, key) => {
  key %= 26;
  if (str === -1) return -1;
  let decipher = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') { //spaces
      decipher += ' ';
    } else if (!str[i].match(/^[A-Za-z\s]+$/i)) { // non letter
      decipher = -1;
      break;
    } else if (isUpperCase(str[i])) { // uppercase
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    } else {//lowercase 
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  return decipher;
};


module.exports = cypher;