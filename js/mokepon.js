function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
   
}


function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    if (inputHipodoge.checked == true) {
        alert("Tu mascota es: Hipodoge")
    } else if (inputCapipepo.checked == true) {
        alert("Tu mascota es: Capipepo")
    } else if (inputRatigueya.checked == true) {
        alert("Tu mascota es: Ratigueya")
    } else {
        alert('selecciona una mascota')
    }
    
}


window.addEventListener('load', iniciarJuego)