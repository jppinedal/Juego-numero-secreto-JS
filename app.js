let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function generNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles :(');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Adivina el número secreto');
    asignarTextoElemento('p', `Ey, escriba pues un número del 1 a ${numeroMaximo}`);
    numeroSecreto = generNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();//generar el número aleatorio, deshabilitar el botón de reiniciar, reinicio de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

  
