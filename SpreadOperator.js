const user = {
    firstName: 'Joao',
    lastName: 'Paulo',
    age: 25,
    instagram: '@joao_pauuuulo',
    skills: ['Back-end', 'Automated tests', 'Quality Assurance'],
    address: 'Rua teste',
    active: false
}



// Diferente do rest operator, não há necessidade do spread ser o ultimo elemento.
// Devido ao fato do spread sobrescrever a propriedade do objeto clonado, é recomendável coloca-lo
// logo no inicio (ou acima das demais propriedades, caso uma delas seja alterada no objeto atualizado)
// caso contrário, uma propriedade poderá ser sobrescrita sem querer
const updatedUser = {
    // O spread clona todas as propriedades de um objeto, mantendo o objeto a ser clonado com o mesmo estado,
    // ou seja, o objeto a ser clonado (user) é imutável e permanecerá do jeito que está.
    // Com spread, dá para criar um novo objeto onde suas propriedades serão clonadas de outro
    // e assim dá para alterar uma ou várias propriedades, como se elas estivessem sendo sobreescritas.
    // No JS, a ultima vez em que essa propriedade é chamada, seu atributo é o vale.
    // Exemplo: active é false no objeto user, mas como está sendo chamado novamente no novo objeto,
    // seu atributo atual é o que vai prevalecer
    ...user,
    skills: [...user.skills, 'Mobile'],
    active: true
}

console.log({ user })
console.log({ updatedUser })