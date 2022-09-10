function tocar_som (instrumento) {
  document.querySelector(instrumento).play()
}

const listaTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaTeclas.length; contador++) {
  const teclas = listaTeclas[contador]
  const instrumento = teclas.classList[1]
  
  const idAudio = `#som_${instrumento}`

  teclas.addEventListener('click', () => {
    tocar_som(idAudio)
  })
}



