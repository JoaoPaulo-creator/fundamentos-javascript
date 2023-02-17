const cartArray = [
    { id: 1, name: 'Iphone', price: 5000, quantity: 2 },
    { id: 2, name: 'MacBook Pro', price: 20000, quantity: 1 },
    { id: 3, name: 'Magic Mouse porcaria', price: 1000, quantity: 5 },
]


/* 
reduce recebe dois parametros, sendo o primeiro a funcao de callbak e o segundo, o valor inicial do reduce
a funcao de callback recebe dois argumentos, sendo o primeiro chamado de 'accumulator' e o segundo parametro
eh o argumento relacionado ao meu array


O reduce vai transformar o array em algum tipo de dado diferente de um array, ou ate mesmo em um novo array. Nesse caso,
o segundo argumento indica que o reduce vai se alguma forma, transformar meu cartArray em um valor inteiro
*/

const reduceCartArray = cartArray.reduce((accumulator, product) => {
    /* 
        accumulator eh uma variavel que navega entre todas as iteracoes que temos,
        funcionando semelhante a variavel dentro de um for loop
    */

   return accumulator + ( product.price * product.quantity ) // a saida vai ser a quantidade de posicoes no meu array original

}, 0) // O segundo argumento do reduce, sera a primeira posicao da iteracao do meu array


console.log({reduceCartArray})