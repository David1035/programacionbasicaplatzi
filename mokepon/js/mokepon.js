let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'



    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
   
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        } else {
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
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('  GANADOR🥳🎉🎈🎖')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('  GANADOR🥳🎉🎈🎖')
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

    } else {
        crearMensaje(' HAZ PERDIDO😭')
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        mensajeGanador(' felicitaciones, haz ganado 🎉🎈')
    }else if(vidasJugador == 0){
        mensajeGanador('haz perdio')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')

    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ' la mascota del enemigo atacó con ' + ataqueEnemigo + ' por lo tanto ' + resultado

    sectionMensajes.appendChild(parrafo)

}

function mensajeGanador(resultadoGanador) {
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('h1')

    parrafo.innerHTML = 'el juego a finalizado: ' + resultadoGanador

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego)