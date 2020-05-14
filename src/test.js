function codeConversionLowercase(letter, cambio){  
  
  console.log("---Lowercase---")
  console.log("Letter: " + letter)
  console.log("Letter Code: " + letter.charCodeAt(0) )

  let code = letter.charCodeAt(0)
  code = (code + cambio - 97 ) % 26 + 97

  console.log("Converted Code: " + code)
  console.log("Converted Letter: " + String.fromCharCode(code))

  code = abs(code - 97) / 26 - cambio + 97

  console.log("Return Code: " + code)
  console.log("Converted Letter: " + String.fromCharCode(code))
  console.log("-----")
}

// function codeConversionUppercase(letter){  
  
//   console.log("---Uppercase---")
//   console.log("Letter: " + letter)
//   console.log("Letter Code: " + letter.charCodeAt(0) )

//   let code = letter.charCodeAt(0)

//   console.log("Converted Code: " + code)

//   code = code - 1

//   console.log("Return Code: " + code)
//   console.log("----------")
// }

codeConversionLowercase('z',200)
// codeConversionUppercase('A')