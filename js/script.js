//const nameUser = prompt ('Olá! Seja bem vindo(a), qual o seu nome ?');

let modelo;
let gola;
let tecido;
const link = document.getElementById('link').value;


let obj = {
        "model": null,
        "neck": null,
        "material": null,
        "image": null,
        "owner": null,
        "author": null,
}

//obj.author = nameUser;
//obj.owner = nameUser;
obj.image = link;

function selectModel(modeloSelecionado)  {

    const modeloAnterior = document.querySelector('.roupas .selecionado')
    

    if (modeloAnterior !== null){

    modeloAnterior.classList.remove('selecionado')
    }

    modeloSelecionado.classList.add('selecionado')


    const modelo = modeloSelecionado.id;
  


    obj.model = modelo;
    
    verificaTudoSelecionado()
    console.log (obj)
}

function selectGola(golaSelecionada){

    const golaAnterior = document.querySelector('.gola .selecionado')
   

    if (golaAnterior !== null ){

    golaAnterior.classList.remove('selecionado')

    }
    golaSelecionada.classList.add('selecionado');

    const gola = golaSelecionada.id
   

    obj.neck = gola;
    

    verificaTudoSelecionado()
    console.log (obj)
}

function selectTecido(tecidoSelecionado){

    const tecidoAnterior = document.querySelector('.tecido .selecionado')

    if (tecidoAnterior !== null){

        tecidoAnterior.classList.remove('selecionado')
    }
    tecidoSelecionado.classList.add('selecionado');

    const tecido = tecidoSelecionado.id
    obj.material = tecido;
    console.log (obj)
verificaTudoSelecionado()


}

function confirmarPedido(){

    alert ('Parabéns! Sua encomenda foi feita efetuada com sucesso. Obrigada pela preferência, volte sempre!');
}

function verificaTudoSelecionado() {

    const link = document.getElementById('link').value
    console.log(link)

   if (obj.model && obj.neck && obj.material){
    const model = document.querySelector('button')
    model.classList.add('confirmarPedido')
    model.removeAttribute('disabled')
   }
 
   validUrl(link);
}

function validUrl(link){

    let httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    let regex = new RegExp (httpRegex);
    obj.image = link;

    if (link.match (regex)){
        return true
    } else {
        return false
    }
}

