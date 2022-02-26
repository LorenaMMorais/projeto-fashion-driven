let modeloEscolhido = null, golaEscolhida = null, tecidoEscolhido = null;
// let nome = prompt("Insira seu nome de usuário:");
// lembrar de desconmentar o prompt!!!!!!!!!!!!!!!

function selecionarModelo(opcaoModelo) {
    if(modeloEscolhido !== null) {
        modeloEscolhido.classList.remove("selecionado");
    }
   
    opcaoModelo.classList.add("selecionado");
    modeloEscolhido = opcaoModelo;
}

function selecionarGola(opcaoGola) {
    if(golaEscolhida !== null) {
        golaEscolhida.classList.remove("selecionado");
    }
   
    opcaoGola.classList.add("selecionado");
    golaEscolhida = opcaoGola;
}

function selecionarTecido(opcaoTecido) {
    if(tecidoEscolhido !== null) {
        tecidoEscolhido.classList.remove("selecionado");
    }
   
    opcaoTecido.classList.add("selecionado");
    tecidoEscolhido = opcaoTecido;
}

