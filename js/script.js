//const nameUser = prompt ('Olá! Seja bem vindo(a), qual o seu nome ?');

let modelo;
let gola;
let tecido;


function selectModel(modeloSelecionado)  {

    const modeloAnterior = document.querySelector('.roupas .selecionado')

    if (modeloAnterior !== null){

    modeloAnterior.classList.remove('selecionado')
    }
    modeloSelecionado.classList.add('selecionado');
}

function selectGola(golaSelecionada){

    const golaAnterior = document.querySelector('.gola .selecionado')

    if (golaAnterior !== null){

    golaAnterior.classList.remove('selecionado')
    }
    golaSelecionada.classList.add('selecionado');
}

function selectTecido(tecidoSelecionado){

    const tecidoAnterior = document.querySelector('.tecido .selecionado')

    if (tecidoAnterior !== null){

        tecidoAnterior.classList.remove('selecionado')
    }
    tecidoSelecionado.classList.add('selecionado');
}

