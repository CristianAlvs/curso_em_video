let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)

num[3] = 6
console.log(`Acrescente uma posição com o numero 6 ${num}`)

num.push(7)
console.log(`Acrescentando um elemento com uma função ${num}`)

console.log(` O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Deixando o vetor em ordem crescente ${num.sort()}`)

/******************** Mostrando cada elemento da lista ***********************/
for (var i = 0; i < num.length; i++) {
  console.log(`A posição ${i} tem o valor ${num[i]}`)
}

// Modelo de repetição para objetos e variáveis compostas
for (let i in num) {
  console.log(`A posição ${i} tem o valor ${num[i]}`)
}
