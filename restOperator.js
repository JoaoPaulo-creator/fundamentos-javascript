const user = {
    firstName: 'Joao',
    lastName: 'Paulo',
    age: 25,
    instagram: '@joao_pauuuulo',
    skills: ['Back-end', 'Automated tests', 'Quality Assurance'],
    address: 'Rua teste'
}





// o operator '...' (rest operator), é usado para pegar e logar todo o resto das propriedades
// do meu objeto que não foi desestruturado, ou seja, o objeto inteiro será logado, 
// exceto o firstName e o skills. Porém se remover uma dessas variáveis, como o fistName por exemplo
// todas as propriedades serão logadas exceto skills.

// A regra do rest operator: O rest operator sempre tem que a ultima constate da desestruturação
const { firstName, skills, ...resto } = user

// rest operator funciona da mesma maneira para destructurind de arrays
const [firstIndex] = skills



console.log(resto)