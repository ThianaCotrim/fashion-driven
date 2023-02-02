const nameUser = prompt ('Olá! Seja bem vindo(a), qual o seu nome ?');

let modelo;
let gola;
let tecido;
const link = document.getElementById('link').value

let dados = [
	{
		"id": null,
		"model": null,
		"neck": null,
		"material": null,
		"image": null,
		"owner": null,
		"author": null,
	}
]


    let obj = {
        "model": null,
        "neck": null,
        "material":null,
        "image": null,
        "owner": null,
        "author": null, 
    
}

obj.author = nameUser;
obj.owner = nameUser;
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

}

function selectTecido(tecidoSelecionado){

    const tecidoAnterior = document.querySelector('.tecido .selecionado')

    if (tecidoAnterior !== null){

        tecidoAnterior.classList.remove('selecionado')
    }
    tecidoSelecionado.classList.add('selecionado');

    const tecido = tecidoSelecionado.id
    obj.material = tecido;
    
    verificaTudoSelecionado()
   

}

function confirmarPedido(){

    enviarPedido()
    

    
}


function verificaTudoSelecionado() {

   const link = document.getElementById('link').value
    
   if (obj.model && obj.neck && obj.material && link){
    const model = document.querySelector('button')
    model.classList.add('confirmarPedido')
    model.removeAttribute('disabled')
   }

   const verificar = document.getElementById('link')
   verificar.addEventListener('input', verificaTudoSelecionado)
   
   validUrl(link)
  
   
 
}


function validUrl(link){
    
    let httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    let regex = new RegExp (httpRegex);
    obj.image = link;

    if (link.match(regex)){
        return true
    } else {
        return false
    }
}

function enviarPedido() {
    
    const promisse = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', obj )

    promisse.then(respostaChegou);
    promisse.catch(respostaDeuErrado)
    console.log (promisse)
 
}

function respostaChegou (resposta){
    pegarPedidosNoServidor();
    alert ('Parabéns! Sua encomenda foi feita efetuada com sucesso. Obrigada pela preferência, volte sempre!');
    console.log(resposta)
   
    console.log(obj)
}

function respostaDeuErrado(){
    alert ('Ops, não conseguimos processar sua encomenda');
    
}

function exibePedido(){
   
    const pedidos = document.querySelector('.fotos')

    pedidos.innerHTML = '';

    for (let i = 0; i < 10 ; i++){

        objeto = lista[i]
        
        let template = `
                    <div id="${i}" onclick="pedidoCriado(this)" class="ultimos">
                        <img src=${objeto.image} onerror="this.onerror=null;this.src='./img/erro.png'">
                        <div class="name"><p>Criador:</p> &nbsp; <span> ${objeto.owner}</span> </div>
                    </div> <!-- fechamento ultimos-->
    `;

        pedidos.innerHTML = pedidos.innerHTML + template;
    }
}

function pegarPedidosNoServidor(){
    const promessa  = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promessa.then(pedidosChegaram);
    promessa.catch(deuErroPegarPedidos);

} 

function pedidosChegaram(resposta){
   

    lista = resposta.data

    exibePedido();
    
}

 function deuErroPegarPedidos(erro){
  
    console.log(erro)
} 


































 function pedidoCriado(blusaClicada){
    
    const pedido = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts' )
    pedido.then( (blusaClicada, resposta) => {

        console.log(blusaClicada)
        console.log(resposta)
    })
    
    const retorno = confirm("Deseja fazer um pedido desse modelo ?");
    if (retorno == true)
    {
    alert ('Operação confirmada') 
    } else {
    alert ('Operação cancelada')
    }
} 

function pegueiOsDados(resposta) {

    listas = resposta.data

    
  
        
        console.log(listas)
        console.log(document.querySelectorAll('.ultimos'))
    

}





















pegarPedidosNoServidor()
