let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
}



function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        seleccionarMascotaEnemigo()
    } else if (inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        seleccionarMascotaEnemigo()
    } else if (inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        seleccionarMascotaEnemigo()
    } else {
        alert('selecciona una mascota')
    }

    

}



function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
   
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()

}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}



function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}


   

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje('EMPATE🖤💻⬛')
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje(' GANADOR🥳🎉🎈🎖')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('  GANADOR🥳🎉🎈🎖')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('  GANADOR🥳🎉🎈🎖')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else
        crearMensaje(' HAZ PERDIDO😭')
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador

}


function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' la mascota del enemigo atacó con ' + ataqueEnemigo + ' por lo tanto ' + resultado

    sectionMensajes.appendChild(parrafo)

}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}



window.addEventListener('load', iniciarJuego)