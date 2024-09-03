const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual seria a opção menos pior para você?",
    alternativas: [
        {
            texto:"Ficar junto com a pessoa que você é apaixonado(a), e saber que com 25 anos de idade você morrerá",
            afirmacao: "Que legal, você prefere deixar de viver sua vida e consquistar seus sonhos hahaha"
        },
        {
        texto:"Ter muito dinheiro e casar com um mendingo",
        afirmacao: "Parabéns você vai ter muito dinheiro, mas viverá infeliz com um mendingo que você não ama"
        }
    ]
},

{
    enunciado: "Qual melhoria você mais queria que fizessem em sua escola?",
    alternativas: [
        {

        texto: "Remover todas as plataformas digitais com conteúdos escolares, e atividades",
        afirmacao: "Realmente uma escolha muito boa, mas e se você tivesse escolhido a outra alternativa, seria incrivel ter educação fisica todos os dias"
        },
        {
        texto:"Ter Educação fisica todos os dias.",
        afirmacao: "Que máximo ter educação fisica todos os dias, mas não existir essas plataformas seria muito melhor"
        }
    ]
},

{
    enunciado: "Qual foi o melhor presidente?",
    alternativas: [
        {
        texto:"Bolsonaro",
        afirmacao: "Tão bom que não continou esse ano HAHAHA"
        },
        {
        texto:"Lula.",
        afirmacao: "ELE É FODA, TODO MÊS 200 NA CONTA KKKK"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
