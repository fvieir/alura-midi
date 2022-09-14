function tocar_som (instrumento) {
  const seletor = document.querySelector(instrumento)

  if(seletor && seletor.localName === 'audio') {
    seletor.play()
  } else {
    console.log('seletor não cadastrado')
  }

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
    if (event.code === 'Enter' || event.code === 'Space') {
      tecla_ativa(teclas)
    }
  })

  teclas.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      remove_tecla_ativa(teclas)
    }
  })
}

