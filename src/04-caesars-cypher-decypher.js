function isUpperCase(str) {
  return str === str.toUpperCase();
}

let deCypher = (str, key) => {
  key %= 26
  if(str === -1) return -1
  let decipher = '';
  
  //decipher each letter
  for(let i = 0; i < str.length; i++){
    inputCode = str.charCodeAt(i)

    if(!str[i].match(/^[A-Za-z\s]+$/i)){ // non letter
      console.log(str[i])
      return "Non letter present in message"      
    }
    if(str[i]== ' '){
      decipher += ' '    
    }
    else if(isUpperCase(str[i])){
      decipher += String.fromCharCode((inputCode - key + 65) % 26 + 65);
    }
    else{//lowercase
      let code = inputCode - key       
      if(code < 97) { code += 26}   
      decipher += String.fromCharCode(code);
    }
  } 
  return decipher;
}

module.exports = deCypher