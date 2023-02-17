const cartArray = [
    { id: 1, name: 'Iphone', price: 5000, quantity: 2 },
    { id: 2, name: 'MacBook Pro', price: 20000, quantity: 1 },
    { id: 3, name: 'Magic Mouse porcaria', price: 1000, quantity: 5 },
    { id: 4, name: 'Paninho bosta', price: 200, quantity: 5 },
]



// map percore item por item dentro de um array, e com base nisso, cria um novo array
// sendo possivel criar um novo array com apenas parte do primeiro array, porem mantendo as mesmas 
// posicoes do array anterior e a mesma quantidade de posicoes  
const mapCart = cartArray.map((product) => ({
        ...product,
        subtotal: product.quantity * product.price
}))




console.log({ mapCart })