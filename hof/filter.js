const cartArray = [
    { id: 1, name: 'Iphone', price: 5000, quantity: 2 },
    { id: 2, name: 'MacBook Pro', price: 20000, quantity: 1 },
    { id: 3, name: 'Magic Mouse porcaria', price: 1000, quantity: 5 },
    { id: 4, name: 'Paninho bosta', price: 200, quantity: 5 },
]


// filter filtra o array, respeitando a rega passada na callback function
// filter eh semelhante com map, porem cria um novo array com a quantidade de posicoes
// que se enquadram como verdade em uma determinada condicao 
const filterCartArray = cartArray.filter((product) => product.quantity > 1)

console.log({ filterCartArray })

