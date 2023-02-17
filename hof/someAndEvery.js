const cartArray = [
    { id: 1, name: 'Iphone', price: 5000, quantity: 2 },
    { id: 2, name: 'MacBook Pro', price: 20000, quantity: 1 },
    { id: 3, name: 'Magic Mouse porcaria', price: 1000, quantity: 5 },
    { id: 4, name: 'Paninho bosta', price: 200, quantity: 5 },
]


// .some() retorna true ou false, dependendo da condicional
// Na pratica, retorna um boolean se algum item do meu array respeitar a condicional 

const someCartArray = cartArray.some((product) => product.price < 1000)

// every() funciona de forma semelhante, porem verifica se TODOS OS ITENS cumprem a regra estabelecida
const everyCartArray = cartArray.every((product) => product.price > 100)

console.log({ someCartArray })
console.log({ everyCartArray })
