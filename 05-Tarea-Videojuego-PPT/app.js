// ============================================================
//  TAREA — Videojuego: Piedra, Papel o Tijera
//  Tu código va en este archivo.
//  Leé el README.md para entender los requisitos.
// ============================================================
    
function jugar(eleccionJugador) {
    let resultado = document.getElementById("eleccionJugador")
    resultado.textContent = eleccionJugador

    let eleccionMaquina = jugarMaquina()
    resultadoDeLaRonda(eleccionJugador, eleccionMaquina)
    
}

function jugarMaquina() {
    let opciones = ['🪨', '📄', '✂️'];
    let eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];;

    let resultado = document.getElementById("eleccionPC");
    resultado.textContent = eleccionMaquina;

    return eleccionMaquina
}

let contadorJugador = 0
let contadorEmpate = 0
let contadorPC = 0

function resultadoDeLaRonda(eleccionJugador, eleccionMaquina) {
    if(eleccionJugador == '✂️') {
        if((eleccionMaquina == '🪨')) {
            document.getElementById('resultado').textContent = 'Perdiste'
            contadorPC++
            document.getElementById('puntajePC').textContent = contadorPC
        }
        else if ((eleccionMaquina == '📄')) {
            document.getElementById('resultado').textContent = 'Ganaste'
            contadorJugador++
            document.getElementById('puntajeJugador').textContent = contadorJugador
        }
        else if ((eleccionMaquina == '✂️')){
            document.getElementById('resultado').textContent = 'Empate'
            contadorEmpate++
            document.getElementById('puntajeEmpate').textContent = contadorEmpate
        }        
    }
    else if (eleccionJugador == '🪨') {
        if((eleccionMaquina == '📄')) {
            document.getElementById('resultado').textContent = 'Perdiste'
            contadorPC++
            document.getElementById('puntajePC').textContent = contadorPC
        }
        else if ((eleccionMaquina == '✂️')) {
            document.getElementById('resultado').textContent = 'Ganaste'
            contadorJugador++
            document.getElementById('puntajeJugador').textContent = contadorJugador
        }
        else if ((eleccionMaquina == '🪨')){
            document.getElementById('resultado').textContent = 'Empate'
            contadorEmpate++
            document.getElementById('puntajeEmpate').textContent = contadorEmpate
        }
    }
    else {
        if((eleccionMaquina == '✂️')) {
            document.getElementById('resultado').textContent = 'Perdiste'
            contadorPC++
            document.getElementById('puntajePC').textContent = contadorPC
        }
        else if ((eleccionMaquina == '🪨')) {
            document.getElementById('resultado').textContent = 'Ganaste'
            contadorJugador++
            document.getElementById('puntajeJugador').textContent = contadorJugador
        }
        else if ((eleccionMaquina == '📄')){
            document.getElementById('resultado').textContent = 'Empate'
            contadorEmpate++
            document.getElementById('puntajeEmpate').textContent = contadorEmpate
        }
    }
}


