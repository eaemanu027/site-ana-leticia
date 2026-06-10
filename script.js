// =========================
// 🚀 ENTRAR NA HISTÓRIA
// =========================

function irParaHistoria() {
    document.getElementById("inicio").style.display = "none";

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// 💌 CARTAS SECRETAS
// =========================

const cartas = {
    triste: "Ei, meu amor. Eu sei que nem todos os dias são fáceis, mas quero que você lembre que não precisa enfrentar nada sozinha. Eu estou aqui por você, sempre. ❤️",

    saudade: "Se a saudade apertar, fecha os olhos e lembra de todos os nossos momentos. Cada risada, cada abraço e cada detalhe nosso valem a espera. 🥹",

    feliz: "Ver você feliz é uma das minhas coisas favoritas no mundo. Aproveita esse momento e sorria muito, porque o seu sorriso ilumina tudo ao redor. ☀️",

    insegura: "Você é incrível exatamente do jeito que é. Nunca deixe que as suas inseguranças façam você esquecer a mulher maravilhosa que eu tenho a sorte de amar. 💕",

    brava: "Se estiver brava comigo, primeiro: respira. Segundo: eu provavelmente fiz alguma besteira mesmo. Terceiro: me dá a chance de consertar, porque eu sempre vou escolher nós duas. 🥺",

    ciumes: "Entre todas as pessoas do mundo, é você quem eu escolho todos os dias. Não existe dúvida no meu coração sobre isso. ❤️",

    rir: "Lembra da calopsita me usando de banheiro? Pois é... se sobrevivemos a isso, sobrevivemos a qualquer coisa. 😂",

    abraco: "Imagina que eu estou te abraçando bem forte agora. Daqueles abraços demorados que fazem tudo parecer um pouco melhor. 🤍",

    duvida: "Se algum dia você duvidar do meu amor, releia tudo o que construímos. Você é, e sempre será, uma das partes mais bonitas da minha vida. 💌",

    historia: "A nossa história começou antes mesmo de você perceber. E, sinceramente? Eu escolheria viver cada capítulo ao seu lado de novo. ✨"
};

function abrirCarta(tipo) {
    document.getElementById("texto-carta").innerText = cartas[tipo];
    document.getElementById("carta-modal").style.display = "flex";
}

function fecharCarta() {
    document.getElementById("carta-modal").style.display = "none";
}


// =========================
// 🎮 QUIZ DA NAMORADA
// =========================

const perguntas = [
    {
        pergunta: "Quem é a pessoa mais linda do mundo?",
        opcoes: [
            "Eu",
            "Ana Letícia",
            "Namorada da Manu",
            "Todas as alternativas"
        ],
        correta: "Todas as alternativas"
    },

    {
        pergunta: "Quem disse 'Eu te amo' primeiro?",
        opcoes: [
            "Gataista",
            "Gatista"
        ],
        correta: "Gatista"
    },

    {
        pergunta: "Qual foi o dia que eu fui na sua casa pela primeira vez?",
        opcoes: [
            "05/01/2025",
            "15/01/2025",
            "08/02/2025",
            "22/02/2025",
            "18/03/2025",
            "29/03/2025"
        ],
        correta: "29/03/2025"
    },
        {
        pergunta: "Qual é o meu cachorro favorito da Patrulha Canina?",
        opcoes: [
            "Skye",
            "Chase",
            "Marshall",
            "Rubble",
            "Rocky",
            "Zuma"
        ],
        correta: "Marshall"
    },

    {
        pergunta: "Qual foi o dia que voltamos a nos falar este ano?",
        opcoes: [
            "05/01",
            "18/01",
            "25/01",
            "27/01",
            "31/01",
            "02/02"
        ],
        correta: "31/01"
    },

    {
        pergunta: "⭐ Quando eu percebi que já tinha me perdido por você?",
        opcoes: [
            "Quando você conheceu minha mãe",
            "Quando voltamos a nos falar",
            "Quando fui na sua casa pela primeira vez",
            "Quando senti o seu toque pela primeira vez",
            "Quando a calopsita fez cocô em mim"
        ],
        correta: "Quando você conheceu minha mãe"
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const quizBox = document.getElementById("quiz-box");

    if (!quizBox) return;

    if (perguntaAtual >= perguntas.length) {
        quizBox.innerHTML = "";

        document.getElementById("resultado-quiz").innerHTML =
            `🎉 Você acertou ${pontuacao} de ${perguntas.length}!<br><br>
            Mas a verdade é que, entre todas as respostas certas,
            a minha favorita sempre vai ser você. ❤️`;

        return;
    }

    const pergunta = perguntas[perguntaAtual];

    quizBox.innerHTML = `
        <h3>${pergunta.pergunta}</h3>

        ${pergunta.opcoes.map(opcao => `
            <button onclick="responder('${opcao.replace(/'/g, "\\'")}')">
                ${opcao}
            </button>
        `).join("")}
    `;
}

function responder(resposta) {
    const pergunta = perguntas[perguntaAtual];

    if (resposta === pergunta.correta) {
        pontuacao++;
        soltarConfete();
        alert("Acertou! 🎉❤️");
    } else {
        alert("Errou! 😭❤️");
    }

    perguntaAtual++;
    mostrarPergunta();
}
// =========================
// 🎉 CONFETES
// =========================

function soltarConfete() {
    for (let i = 0; i < 30; i++) {
        const confete = document.createElement("div");

        confete.innerHTML = "🎉";
        confete.style.position = "fixed";
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = "-20px";
        confete.style.fontSize = "20px";
        confete.style.pointerEvents = "none";
        confete.style.zIndex = "9999";
        confete.style.animation = "cair 2s linear";

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 2000);
    }
}


// =========================
// ❤️ CONTADOR
// =========================

function atualizarContador() {
    const elementoTempo = document.getElementById("tempo");

    if (!elementoTempo) return;

    // Data de início do relacionamento
    const dataInicio = new Date("2026-04-25T00:00:00");

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    elementoTempo.innerHTML =
        `${dias} dias juntas ❤️`;
}

atualizarContador();


// =========================
// 😶 BOTÃO "NÃO" FUGINDO
// =========================

const botaoNao = document.getElementById("nao");

if (botaoNao) {
    botaoNao.addEventListener("mouseover", function () {

        const larguraMaxima =
            window.innerWidth - botaoNao.offsetWidth;

        const alturaMaxima =
            window.innerHeight - botaoNao.offsetHeight;

        const x = Math.random() * larguraMaxima;
        const y = Math.random() * alturaMaxima;

        botaoNao.style.position = "fixed";
        botaoNao.style.left = x + "px";
        botaoNao.style.top = y + "px";
    });
}


// =========================
// 🥰 BOTÃO "SIM"
// =========================

const botaoSim = document.getElementById("sim");

if (botaoSim) {
    botaoSim.addEventListener("click", function () {
        alert(
            "Eu sabia ❤️\n\nObrigada por escolher viver essa história comigo. Eu te amo!"
        );
    });
}


// =========================
// 🚀 INICIAR O QUIZ
// =========================

mostrarPergunta();
@keyframes cair {
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}
