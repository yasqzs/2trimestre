const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Qual sua cor favorita?",
    alternativas: [
        {
            texto:"roxo",
            afirmacao: "afirmação 1"
        },
        {
        texto:"rosa",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "Qual sua matéria favorita?",
    alternativas: [
        {

        texto: "Matemática.",
        afirmacao: "afirmação 3"
        },
        {
        texto:"Educação fisica.",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Qual sua música favorita?",
    alternativas: [
        {
        texto:"No Idea - Don Toliver",
        afirmacao: "afirmação 5"
        },
        {
        texto:"Confissões - KayBlack.",
        afirmacao: "afirmação 6"
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
