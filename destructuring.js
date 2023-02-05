const user = {
    firstName: 'Joao',
    lastName: 'Paulo',
    age: 25,
    instagram: '@joao_pauuuulo',
    skills: ['Back-end', 'Automated tests', 'Quality Assurance'],
    address: 'Rua teste'
}




const { firstName, age, skills } = user

// pegando uma propriedade do meu objeto e renomeando-a
const { address: endereco } = user

// desestruturando um array, Para isso, é necessário criar uma variável
// que vá representar a posição do item que quero desestruturar do meu array
// ou seja, a skill Back-end vai estar vinculada a variável posicao0, e assim por diante
// se a destructuring de array conter mais variaveis do que itens em um array, as demais variavei
// ficarao assinaladas como undefined
const [firstIndex, secondIndex] = skills



console.log(endereco)