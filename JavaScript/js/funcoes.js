function parOuImpar(n) {
  if(n%2==0) {
    return "par"
  } else {
    return "ímpar"
  }
}
console.log(parOuImpar(5))

// Função para somar dois números, caso um dos parâmetros NÃO for passado, será 0
function soma(n1=0,n2=0) {
  return n1 + n2
}
console.log(soma(2))

// variável recebendo uma função
let dobro = function(x) {
  return x*2
}
console.log(dobro(5))

//**************************descobrindo o fatorial de um número
// 5! = 5 x 4 x 3 x 2 x 1
function fatorial(n) {
  let fat = 1
  //enquanto for maior que 1, vai perdendo 1
  for(let i = n ; i > 1; i--) {
    fat *= i
  }
  return fat
}
console.log(fatorial(5))

//usando forma recursiva
function fatorial_recursivo(n){
  if(n == 1) {
    return 1
  } else {
    return n * fatorial(n-1)
  }
}
console.log(fatorial(5))