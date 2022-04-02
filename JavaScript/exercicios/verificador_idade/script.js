function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var txtAno = document.getElementById('txtAno')
  var res = document.querySelector('div#res')
  if (txtAno.value.length == 0 || txtAno.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!!')
  } else {
    var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(txtAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', '/JavaScript/exercicios/imagens/menino.jpg')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute(
          'src',
          '/JavaScript/exercicios/imagens/jovem_homem.jpg'
        )
      } else if (idade < 50) {
        // Adulto
        img.setAttribute(
          'src',
          '/JavaScript/exercicios/imagens/homem_adulto.jpg'
        )
      } else {
        //Idoso
        img.setAttribute('src', '/JavaScript/exercicios/imagens/idoso.jpg')
      }
    } else if (sexo[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //Criança
        img.setAttribute('src', '/JavaScript/exercicios/imagens/menina.jpg')
      } else if (idade < 21) {
        //Jovem
        img.setAttribute(
          'src',
          '/JavaScript/exercicios/imagens/jovem_mulher.jpg'
        )
      } else if (idade < 50) {
        // Adulto
        img.setAttribute(
          'src',
          '/JavaScript/exercicios/imagens/mulher_adulta.jpg'
        )
      } else {
        //Idoso
        img.setAttribute('src', '/JavaScript/exercicios/imagens/idosa.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

    res.appendChild(img)
  }
}
