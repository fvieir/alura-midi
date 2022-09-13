function tocar_som (instrumento) {
  document.querySelector(instrumento).play()
}

function tecla_ativa (tecla)
{
  tecla.classList.add('ativa')
}

function remove_tecla_ativa (tecla)
{
  tecla.classList.remove('ativa')
}

const listaTeclas = document.querySelectorAll('.tecla')


for (let contador = 0; contador < listaTeclas.length; contador++) {
  const teclas = listaTeclas[contador]
  const instrumento = teclas.classList[1]
  
  const idAudio = `#som_${instrumento}`

  teclas.onclick =  function (event) {
    tocar_som(idAudio)
  }
  
  teclas.addEventListener('keydown', (event) => {
    if (event.code === 'enter' || event.code === 'space') {
      tecla_ativa(teclas)
      console.log(event)
    }
  })

  teclas.addEventListener('keyup', (event) => {
    if (event.code === 'enter' || event.code === 'space') {
      remove_tecla_ativa(teclas)
    }
  })
}
