const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você se sentiria se alguém chega-se em você e disse-se que o futuro do planeta está em suas mãos?",
        alternativas: [
            {
                texto: "Me sentiria assutado",
                afirmacao: "Normal, eu também me sentiria assim, afinal isso é uma grande responsabilidade.",
            },
            {
                texto: "Me sentiria responsável e garantiria o futuro do bem-estar do nosso planeta",
                afirmacao: "Olha muito bom seu jeito de pensar, isso mostra que você é uma pessoa confiante. ",
            }
        ]
    },
    {
        enunciado: "Vamos agora começar com algumas perguntas e respostas para testar seu conhecimento sobre o meio ambiente:",
        alternativas: [
            {
                texto: "Vamos nessa",
                afirmacao: "Mas agora vamos agora ver como você se sai com nossas perguntas,",
            },
            {
                texto: "Não estou afim",
                afirmacao: "Mas vamos continuar em frente.",
            }
        ]
    },
    {
        enunciado: "Qual é a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "A emissão de gases do efeito estufa",
                afirmacao: "A emissão de gases do efeito estufa realmente causa grande impacto na natureza.",
            },
            {
                texto: "O aumento do número de vulcões ativos",
                afirmacao: "Será que essa é realmente a resposta? Os vulcões ativos não influenciam diretamente na questão do aquecimento global.",
            }
        ]
    },
    {
        enunciado: "Qual recurso natural é renovável?",
        alternativas: [
            {
                texto: "Petróleo",
                afirmacao: "Não é bem assim, o petróleo leva milhares de anos para se formar, e acaba se tornando uma fonte energia demorada, além de prejudicar o meio ambienete.",
            },
            {
                texto: "Energia solar",
                afirmacao: "A energia solar além de ser uma fonte limpa é renovável.",
            }
        ]
    },
    {
        enunciado: "Qual o maior ecossistema terrestre do planeta?",
        alternativas: [
            {
                texto: "Taiga",
                afirmacao: "A taiga é presente em várias partes da América do Norte e Europa, ele se destaca por estar presente nos lugares mais frios do mundo.",
            },
            {
                texto: "Floresta amazônica",
                afirmacao: "A floresta Amazônica é sim uma grande floresta, mas não é o maior ecossitema do mundo, pois é presente apenas na América do Sul, e sua maior extensão territorial se encontra no Brasil.",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();