const nameUser = prompt ('Olá! Seja bem vindo(a), qual o seu nome ?');

let blusa = null;
let modelo;
let gola;
let tecido;
const link = document.getElementById('link').value

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

const selectModel = (modeloSelecionado) =>  {

    const modeloAnterior = document.querySelector('.roupas .selecionado')
    
    if (modeloAnterior !== null){

    modeloAnterior.classList.remove('selecionado')
    }

    modeloSelecionado.classList.add('selecionado')

    const modelo = modeloSelecionado.id;
  
    obj.model = modelo;
    
    verificaTudoSelecionado()
}

const selectGola = (golaSelecionada) => {

    const golaAnterior = document.querySelector('.gola .selecionado')

    if (golaAnterior !== null ){

    golaAnterior.classList.remove('selecionado')

    }
    golaSelecionada.classList.add('selecionado');

    const gola = golaSelecionada.id

    obj.neck = gola;
    
    verificaTudoSelecionado()
}

const selectTecido = (tecidoSelecionado) => {

    const tecidoAnterior = document.querySelector('.tecido .selecionado')

    if (tecidoAnterior !== null){

        tecidoAnterior.classList.remove('selecionado')
    }
    tecidoSelecionado.classList.add('selecionado');

    const tecido = tecidoSelecionado.id
    obj.material = tecido;
    
    verificaTudoSelecionado()
}

const confirmarPedido =()=> {

    enviarPedido()
}

const verificaTudoSelecionado = () => {

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

const validUrl = (link) => {
    
    let httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    let regex = new RegExp (httpRegex);
    obj.image = link;

    if (link.match(regex)){
        return true
    } else {
        return false
    }
}

const enviarPedido = () => {
    
    const promisse = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', obj )

    promisse.then(respostaChegou);
    promisse.catch(respostaDeuErrado)
    console.log (promisse)
}

const respostaChegou = (resposta) => {
    pegarPedidosNoServidor();
    alert ('Parabéns! Sua encomenda foi efetuada com sucesso. Obrigada pela preferência, volte sempre!');
    console.log(resposta)
   
    console.log(obj)
}

const respostaDeuErrado = () => {
    alert ('Ops, não conseguimos processar sua encomenda'); 
}

const exibePedido = () => {
   
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

const pegarPedidosNoServidor = () => {
    const promessa  = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts')
    promessa.then(pedidosChegaram);
    promessa.catch(deuErroPegarPedidos);

} 

const pedidosChegaram = (resposta) => {
   

    lista = resposta.data

    exibePedido();
}

 const deuErroPegarPedidos = (erro) => {
  
    console.log(erro)
} 

 const pedidoCriado = (blusaClicada) => {
    
    const pedido = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts' )
    pedido.then( (resposta) => pegueiOsDados (resposta, blusaClicada))

} 

const pegueiOsDados = (resposta, blusaClicada) => {

    blusa = resposta.data[blusaClicada.id]

            
    const retorno = confirm("Deseja fazer um pedido desse modelo ?");
    if (retorno == true)
    {

        const promisse = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', 
        {  

            "model": blusa.model,
            "neck": blusa.neck,
            "material":blusa.material,
            "image": blusa.image,
            "owner": nameUser,
            "author": blusa.owner, 

        })

        promisse.then(respostaChegou);
        promisse.catch(respostaDeuErrado)
        console.log (promisse)
    

    alert ('Operação confirmada') 

    } else {
    alert ('Operação cancelada')
    }
        console.log(listas)
}
pegarPedidosNoServidor()
