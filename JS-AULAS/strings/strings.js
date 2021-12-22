// Retorna o tamanho de uma string
const palavra = 'Amor'.length
console.log('Quantidade de letras:', palavra)

// separa a palavra de acordo com um delimitador
const splittedText = 'Texto'.split('x')
console.log('\n Array com as posicoes separadas por delimitador',splittedText)

// substitui uma palavra por outro texto
const replacedText = 'Texto'.replace('Text', 'txoT')
console.log ('Texto substituido:', replacedText)

// fatia um valor
const lastChar = 'Texto'.slice(-1)
console.log ('Texto fatiado', lastChar)

const allWithoutLastChar = 'Texto'.slice(0,-1)
console.log('\n Valor da string da primeira letra menos a ultima', allWithoutLastChar)

const secondToEnd = 'Texto'.slice(1)
console.log('\n Valor da segunda letra ate a ultima', secondToEnd)

//Retorna N caracteres a partir de uma posição
const twoCharactersBeforePos = 'Texto'.substr(0,2)
console.log('\n As duas primeiras letras sao', twoCharactersBeforePos)
