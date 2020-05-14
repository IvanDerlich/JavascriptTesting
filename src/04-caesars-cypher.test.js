const cypher = require('./04-caesars-cypher-cypher')
const deCypher = require('./04-caesars-cypher-decypher')

function process(message,offset){
  const cyphered = cypher(message,offset)
  //console.log(message + " -> ", cyphered)
  const deCyphered = deCypher(cyphered,offset)
  //console.log(cyphered + " -> ", deCyphered)
  return deCyphered
}

test('Numbers, 13', () => {
  const message = '1'
  const offset = 13
  expect(process(message,offset)).toBe(-1)
})


test('ATTACKATONCE, 13', () => {
  const message = 'ATTACKATONCE'
  const offset = 13
  expect(process(message,offset)).toBe(message)
})

test('adfad, 13', () => {
  const message = 'adfad'
  const offset = 13
  expect(process(message,offset)).toBe(message)
})

test('adfad, 13', () => {
  const message = '1sAf sdf3'
  const offset = 13
  expect(process(message,offset)).toBe(-1)
})

test('adfad, 13', () => {
  const message = 'sAf sdf3'
  const offset = 13
  expect(process(message,offset)).toBe(-1)
})

test('code faster, 13', () => {
  const message = 'code faster'
  const offset = 13
  expect(process(message,offset)).toBe(message)
})

test('Hello, 13', () => {
  const message = 'hello'
  const offset = 13
  expect(process(message,offset)).toBe(message)
})

function testOffset(maxOffset){
  for(i=1;i<maxOffset+1;i++){
    test('Alphabet, '+ i, () => {
      const message = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'      
      expect(process(message,maxOffset)).toBe(message)
    })
  }
}

testOffset(120)