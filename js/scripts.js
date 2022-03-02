const LINK_API = "https://mock-api.driven.com.br/api/v4/shirts-api/shirts";
let id = null;

let nomeUsuario = '';
let verificaSeEstaHabilitado;
let urlAuxiliar = 'URL inválida'
let linkImagem = '';
let modeloEscolhido = null, golaEscolhida = null, tecidoEscolhido = null;



function comecarApp(){
    validarNomeUsuario();
    pegarUltimosPedidos();
}
comecarApp();
function validarNomeUsuario(){
    while(nomeUsuario === '' || nomeUsuario === undefined){
        nomeUsuario = prompt('Insira seu nome de usuário:');
    }
    owner = nomeUsuario;
    author = nomeUsuario;
    alert(`Seja bem-vindxs, ${nomeUsuario}`)
}
function pegarUltimosPedidos() {
    const promessa = axios.get(`${LINK_API}`);
    promessa.then(renderizarUltimosPedidos);
}  

function postEmUltimosPedidos(){
    const promessa = axios.post(`${LINK_API}`,
    {model: modeloEscolhido, neck: golaEscolhida, material: tecidoEscolhido, image: linkImagem, owner: nomeUsuario, author: nomeUsuario});
    promessa.then();
}

function renderizarUltimosPedidos(pedidosAnteriores){
    let arrayPedidos = pedidosAnteriores.data;
    let containerUltimosPedidos = document.querySelector(".container-ultimos-pedidos");
    containerUltimosPedidos.innerHTML = "";
    for(let i = 0; i < arrayPedidos.length; i++){
        let pedido = arrayPedidos[i];
        console.log(pedido);
        containerUltimosPedidos.innerHTML += `
        <div class="caixa-ultimos-pedidos">
            <img class="img-ultimos-pedidos" src="${pedido.image}" alt="${pedido.image}">
            <p><strong>Criador:</strong>${pedido.owner}</p>
        </div>
        `
    } 
}

function selecionarModelo(opcaoModelo) {
    if(modeloEscolhido !== null) {
        modeloEscolhido.classList.remove("selecionado");
    }   
    opcaoModelo.classList.add("selecionado");
    modeloEscolhido = opcaoModelo;
    habilitarBotao();
}

function selecionarGola(opcaoGola) {
    if(golaEscolhida !== null) {
        golaEscolhida.classList.remove("selecionado");
    }
    opcaoGola.classList.add("selecionado");
    golaEscolhida = opcaoGola;
    habilitarBotao();
}

function selecionarTecido(opcaoTecido) {
    if(tecidoEscolhido !== null) {
        tecidoEscolhido.classList.remove("selecionado");
    }
    opcaoTecido.classList.add("selecionado");
    tecidoEscolhido = opcaoTecido;
    habilitarBotao();
}

function obterLink() {
    linkImagem = document.querySelector(".link-img").value;
    if(validarUrl(linkImagem) === true){
        urlAuxiliar = 'url válida';
    }else{
        urlAuxiliar = 'url inválida';
    }
}

function validarUrl(texto) {
    let urlValidacao = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return !!urlValidacao.test(texto);
}

function habilitarBotao(){
    obterLink();
    const botao = document.querySelector("button");
    if (modeloEscolhido !== null && golaEscolhida !== null && tecidoEscolhido !== null && urlAuxiliar === 'url válida'){
            botao.style.backgroundColor = "#404EED";
            verificaSeEstaHabilitado = true;
    }else if(urlAuxiliar === 'url inválida'){
        botao.style.backgroundColor = "#C4C4C4";
        verificaSeEstaHabilitado = false;
    }
    confirmarPedido();
}

function confirmarPedido(){
    if (verificaSeEstaHabilitado === true){
        postEmUltimosPedidos();
        alert("Sua encomenda foi validada com sucesso!")
    }else{
        alert("Houve algum erro no seu pedido");
    }
}