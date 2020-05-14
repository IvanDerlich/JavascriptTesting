/* Credits to:
  https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/ 
*/

// function cypher(message,shift){
//   return message.toUpperCase()
//   .replace(/[A-Z]/g, c => 
//     String.fromCharCode((c.charCodeAt(0)-65 + shift ) % 26 + 65)
//   )
//   .toLowerCase();
// }

function isUpperCase(str) {
  return str === str.toUpperCase();
}

let cypher = (str, key) => {
  key %= 26
  if(str === -1) return -1
  let decipher = '';
  
  for(let i = 0; i < str.length; i++){
    
    if(str[i]== ' '){
      decipher += ' '
    } else if (!str[i].match(/^[A-Za-z\s]+$/i)){  //non letter
      decipher = -1          
      break        
    } else if(isUpperCase(str[i])){//if letter is uppercase then add uppercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
    } else{
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  } 
  return decipher;
}



module.exports = cypher