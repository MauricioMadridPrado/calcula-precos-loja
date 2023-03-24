
const precos = []
const valores = document.querySelectorAll('.formulario__lista__valor');
let total = 0;

console.log(precos)
valores.forEach(valor => precos.push(valor)
    
);
console.log(precos)

console.log(precos.reduce((acc, precos)=> parseFloat(acc) + parseFloat(precos) , 0))
