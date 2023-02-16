const tech = 'Node.js'
const stack = ['node.js', 'react', 'sql']

const objetoTest = {
    name: 'Joao'
}

// includes retornar um boolean. Se na string ou objeto conter a info passda como argumento, entao retorna true.
// Necessario que argumento contenha parte do text, porem se houver alguma diferença, como um ponto que não foi passado
// Então é retornado false


// Essas funcoes sao case sensitive, ou seja, se a variavel contem uma string escrita em caixa alta, e a verificacao
// no inclues, startsWith e endsWith estiver em caixa baixa, sera retornado false
const checkIfIncludes = tech.includes('ode')
const checkObject = objetoTest.name.includes('joao')
console.log({ checkObject })

if(stack.includes('python')){
    console.log('Contem sql na stack')
}

if(stack.includes('python')){
    console.log('Nao contem python na stack')
}


// startsWith e endsWith é semelhante, o nome de ambas as funções é alto explicativa
const checkIfStartsWith = tech.startsWith('o')
const checkIfEndsWith = tech.endsWith('.js')



console.log({ checkIfIncludes })
console.log({ checkIfStartsWith })
console.log({ checkIfEndsWith })