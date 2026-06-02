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
