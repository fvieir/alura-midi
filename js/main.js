function tocar_som (instrumento) {
  document.querySelector(instrumento).play()
}

const listaTeclas = document.querySelectorAll('.tecla')

let contador = 0

while (listaTeclas.length > contador) {
  const tecla = listaTeclas[contador]
  const instrumento = tecla.classList[1]

  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocar_som(idAudio)
  }

  contador++
}



