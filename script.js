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
