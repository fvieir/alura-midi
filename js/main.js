function tocar_som (instrumento) {
  document.querySelector(instrumento).play()
}

function tecla_ativa (tecla)
{
  tecla.classList.add('ativa')
}

function remove_tecla_ativa (tecla)
{
  setInterval(() => {
    tecla.classList.remove('ativa')
  }, 500)
}

const listaTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaTeclas.length; contador++) {
  const teclas = listaTeclas[contador]
  const instrumento = teclas.classList[1]
  
  const idAudio = `#som_${instrumento}`

  teclas.addEventListener('click', () => {
    tocar_som(idAudio)
    tecla_ativa(teclas)
    remove_tecla_ativa(teclas)
  })
}



