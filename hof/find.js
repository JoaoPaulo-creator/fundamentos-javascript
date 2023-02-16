const cartArray = [
    { id: 1, name: 'Iphone', price: 5000, quantity: 2 },
    { id: 2, name: 'MacBook Pro', price: 20000, quantity: 1 },
    { id: 3, name: 'Magic Mouse porcaria', price: 1000, quantity: 5 },
]

// No primeiro momento em que a prop passada for true, a iteracao eh parada
// find sempre para a iteracao no primeiro elemento em que a condicao retorna true
const findProduct = cartArray.find((product) => product.price > 1000)


// findIndex() qual a posicao dentro do array.
const findProductIndex = cartArray.findIndex((product) => product.name === 'Magic Mouse porcaria')
//console.log({findProductIndex})

console.log('Produt:',  cartArray[findProductIndex])