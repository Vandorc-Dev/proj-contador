let numeroAtualWrapper = document.getElementById('numeroAtual');
let numeroAtual = 0;


function increment(){
    numeroAtual = numeroAtual + 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}


function decrement(){
    numeroAtual = numeroAtual - 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}


function zerar(){
    numeroAtual = 0;
    numeroAtualWrapper.innerHTML = numeroAtual;
}