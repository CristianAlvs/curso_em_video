function contar() {
  let txtInicio = document.getElementById('txtinicio')
  let txtFim = document.getElementById('txtfim')
  let txtPasso = document.getElementById('txtpasso')
  let res = document.getElementById('res')

  if (
    txtInicio.value.length == 0 ||
    txtFim.value.length == 0 ||
    txtPasso.value.length == 0
  ) {
    //window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível Contar!'
  } else {
    res.innerHTML = 'Contando: <br>'
    let inicio = Number(txtInicio.value)
    let fim = Number(txtFim.value)
    let passo = Number(txtPasso.value)

    if (passo <= 0) {
      window.alert('Passo Inválido! Considerando PASSO IGUAL a 1')
      passo = 1
    }
    if (inicio < fim) {
      // Contagem crescente
      for (let contador = inicio; contador <= fim; contador += passo) {
        res.innerHTML += `${contador} \u{1f449}`
      }
    } else {
      // Contagem decrescente
      for (let contador = inicio; contador >= fim; contador -= passo) {
        res.innerHTML += `${contador} \u{1f449}`
      }
    }

    res.innerHTML += `\u{1F3C1}`
  }
}
