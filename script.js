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
function soltarConfete() {
    for (let i = 0; i < 30; i++) {
        const confete = document.createElement("div");

        confete.innerHTML = "🎉";
        confete.style.position = "fixed";
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = "-20px";
        confete.style.fontSize = "20px";
        confete.style.animation = "cair 2s linear";

        document.body.appendChild(confete);

        setTimeout(() => confete.remove(), 2000);
    }
}
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


