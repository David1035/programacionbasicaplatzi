function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
let triunfos = 0
let perdidas = 0
let pc = 0
while(triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt('Elige: 1 piedra, 2 papel, 3 tijera ')
    if (jugador == pc) {
        alert('Empate')
    } else if(jugador == 1 && pc == 3) {
        alert('Ganaste, mataste a tijera')
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1) {
        alert('Ganaste, mataste a papel')
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2) {
        alert('Ganaste, mataste a papel')
        triunfos = triunfos + 1
    } else {
        alert('perdiste')
        perdidas = perdidas + 1
    }
}
