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
// 📖 (FUTURO) CARTAS
// =========================

// Aqui depois vamos fazer abrir mensagens secretas
// Ex: "abrir quando estiver triste"


// =========================
// 🎮 (FUTURO) QUIZ
// =========================

// Aqui vamos colocar:
// - resposta certa
// - pontuação
// - troca de perguntas
const perguntas = [
    {
        pergunta: "Quem é a pessoa mais linda do mundo?",
        opcoes: ["Eu", "Ana Letícia", "Namorada da Manu", "Todas as alternativas"],
        correta: "Todas as alternativas"
    },
    {
        pergunta: "Quem disse 'Eu te amo' primeiro?",
        opcoes: ["Gataista", "Gatista"],
        correta: "Gatista"
    },
    {
        pergunta: "Qual foi o dia que eu fui na sua casa pela primeira vez?",
        opcoes: ["05/01/2025", "15/01/2025", "08/02/2025", "22/02/2025", "18/03/2025", "29/03/2025"],
        correta: "29/03/2025"
    },
    {
        pergunta: "Qual é o meu cachorro favorito da Patrulha Canina?",
        opcoes: ["Skye", "Chase", "Marshall", "Rubble", "Rocky", "Zuma"],
        correta: "Marshall"
    },
    {
        pergunta: "Qual foi o dia que voltamos a nos falar este ano?",
        opcoes: ["05/01", "18/01", "25/01", "27/01", "31/01", "02/02"],
        correta: "31/01"
    }
];

// =========================
// ❤️ (FUTURO) BOTÃO "NÃO" FUGINDO
// =========================

const botaoNao = document.getElementById("nao");

if (botaoNao) {
    botaoNao.addEventListener("mouseover", function () {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        botaoNao.style.position = "absolute";
        botaoNao.style.left = x + "px";
        botaoNao.style.top = y + "px";
    });
}


// =========================
// 💖 BOTÃO "SIM"
// =========================

const botaoSim = document.getElementById("sim");

if (botaoSim) {
    botaoSim.addEventListener("click", function () {
        alert("Eu sabia ❤️");
    });
}

function soltarConfete() {
    for (let i = 0; i < 40; i++) {
        const confete = document.createElement("div");

        confete.style.position = "fixed";
        confete.style.width = "8px";
        confete.style.height = "8px";
        confete.style.backgroundColor = coresConfete();
        confete.style.left = Math.random() * window.innerWidth + "px";
        confete.style.top = "-10px";
        confete.style.opacity = Math.random();
        confete.style.zIndex = 9999;

        confete.style.animation = `cair ${1 + Math.random() * 2}s linear`;

        document.body.appendChild(confete);

        setTimeout(() => {
            confete.remove();
        }, 3000);
    }
}

function coresConfete() {
    const cores = ["#00ff88", "#ff4d6d", "#ffd166", "#4cc9f0", "#b5179e"];
    return cores[Math.floor(Math.random() * cores.length)];
}

if (botao.textContent === respostaCorreta) {
    botao.classList.add("acertou");
    pontos++;

    soltarConfete();
}
