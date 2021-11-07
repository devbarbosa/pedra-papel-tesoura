// Importando elementos do HTML
const pedraElement = document.querySelector("button[name=pedra]");
const papelElement = document.querySelector("button[name=papel]");
const tesouraElement = document.querySelector("button[name=tesoura]");
const score1Element = document.querySelector("#score1");
const score2Element = document.querySelector("#score2");
const jogadorElement = document.querySelector("img[name=jogador]");
const maquinaElement = document.querySelector("img[name=maquina]");
const resultadoElement = document.querySelector("p[name=resultado]");

// Itens do jogo
//  Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0;
let contadorPc = 0;

// função alterar score
function alteraScore(){
    score1Element.innerHTML = `${contadorJogador}`;
    score2Element.innerHTML = `${contadorPc}`;
}
// Adicionando eventos click
pedraElement.addEventListener("click", () => {
    let maquina = Math.floor(Math.random() * 3);
    jogadorElement.src = 'imagens/icon-pedra.svg'
    switch(maquina){
        case 0:
            maquinaElement.src = 'imagens/icon-pedra.svg'
            resultadoElement.innerHTML = "Resultado: EMPATE! :O";
            break;
        case 1:
            maquinaElement.src = 'imagens/icon-papel.svg'
            resultadoElement.innerHTML = "Resultado: Você Perdeu!!! :("
            contadorPc++;
            break;
        case 2:
            maquinaElement.src = 'imagens/icon-tesoura.svg'
            resultadoElement.innerHTML = "Resultado: Você Venceu!!! :D";
            contadorJogador++
            break;
    }
    alteraScore()
})

papelElement.addEventListener("click", () => {
    let maquina = Math.floor(Math.random() * 3);
    jogadorElement.src = 'imagens/icon-papel.svg'
    switch(maquina){
        case 0:
            maquinaElement.src = 'imagens/icon-pedra.svg'
            resultadoElement.innerHTML = "Resultado: Você Venceu!!! :D";
            contadorJogador++;
            break;
        case 1:
            maquinaElement.src = 'imagens/icon-papel.svg'
            resultadoElement.innerHTML = "Resultado: EMPATE! :O";
            break;
        case 2:
            maquinaElement.src = 'imagens/icon-tesoura.svg'
            resultadoElement.innerHTML = "Resultado: Você Perdeu!!! :(";
            contadorPc++;
            break;
    }
    alteraScore()
})

tesouraElement.addEventListener("click", () => {
    let maquina = Math.floor(Math.random() * 3);
    jogadorElement.src = 'imagens/icon-tesoura.svg'
    switch(maquina){
        case 0:
            maquinaElement.src = 'imagens/icon-pedra.svg'
            resultadoElement.innerHTML = "Resultado: Você Perdeu!!! :(";
            contadorPc++;
            break;
        case 1:
            maquinaElement.src = 'imagens/icon-papel.svg'
            resultadoElement.innerHTML = "Resultado: Você Venceu!!! :D";
            contadorJogador++;
            break;
        case 2:
            maquinaElement.src = 'imagens/icon-tesoura.svg'
            resultadoElement.innerHTML = "Resultado: EMPATE! :O";
            break;
    }
    alteraScore()
})