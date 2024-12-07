const startDate = new Date('2024-06-12T18:30:00');

// Atualiza o contador de tempo
function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    renderDigits('days', days);
    renderDigits('hours', hours);
    renderDigits('minutes', minutes);
    renderDigits('seconds', seconds);
}

// Renderiza os dígitos na interface
function renderDigits(id, value) {
    const container = document.getElementById(id);
    container.innerHTML = '';

    const formattedValue = String(value).padStart(2, '0');
    for (let char of formattedValue) {
        const div = document.createElement('div');
        div.textContent = char;
        div.className = 'digit';
        container.appendChild(div);
    }
}

// Abre a imagem no lightbox
function openImage(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

// Fecha o lightbox
function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Mostra o botão de voltar ao topo ao rolar a página
window.onscroll = function () {
    document.getElementById('back-to-top').style.display =
        window.scrollY > 100 ? 'block' : 'none';
};

// Volta ao topo suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter();

// Mostra ou oculta a mensagem oculta
function revealMessage() {
    const message = document.getElementById('hidden-message');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
}

// Seleção dos botões
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Função para clicar no "Sim"
yesBtn.addEventListener('click', () => {
    alert('Sabia que você iria aceitar, por isso que eu te amoooooo! ❤️');
});

// Função para clicar no "Não"
noBtn.addEventListener('click', () => {
    noBtn.classList.add('fugindo');

    const legs = document.createElement('div');
    legs.classList.add('legs');

    const leg1 = document.createElement('div');
    leg1.classList.add('leg');
    const leg2 = document.createElement('div');
    leg2.classList.add('leg');

    legs.appendChild(leg1);
    legs.appendChild(leg2);

    noBtn.appendChild(legs);
});

// ---- ADICIONANDO A VERIFICAÇÃO PARA 2026 ----
function checkProposalDate() {
    const releaseDate = new Date('2026-06-12T00:00:00');
    const currentDate = new Date();

    if (currentDate >= releaseDate) {
        document.getElementById("proposal-section").style.display = "block";
        document.getElementById("future-message").style.display = "none"; // Remove a mensagem de aguarde
    } else {
        document.getElementById("future-message").style.display = "block"; // Mostra a mensagem até a data
        console.log("A surpresa ainda não pode ser revelada! 🕒");
    }
}

// ---- EXIBIR MENSAGEM "VOLTE EM 12/06/2026" ----
function displayFutureMessage() {
    const currentDate = new Date();
    const releaseDate = new Date('2026-06-12T00:00:00');

    if (currentDate < releaseDate) {
        const message = document.createElement('div');
        message.id = 'future-message';
        message.style = `
            text-align: center;
            margin-top: 20px;
            font-size: 1.5rem;
            color: #3b3b3b;
        `;
        message.textContent = "Volte no dia 12/06/2026 para uma surpresa especial! 💌";
        document.body.appendChild(message);
    }
}

// ---- SURPRESA: IMAGEM DE QRCODE ----
function setupSurpriseSection() {
    const surpriseSection = document.getElementById("proposal-section");
    surpriseSection.innerHTML = `
        <h2>Surpresa Especial! 💖</h2>
        <img src="qrcode.jpg" alt="QR Code Surpresa" style="max-width: 100%; border-radius: 15px;" />
    `;
}

// Executa a lógica inicial
window.addEventListener('DOMContentLoaded', () => {
    displayFutureMessage();
    checkProposalDate();

    const audio = document.getElementById('audio');
    audio.play().catch((error) => {
        console.warn('O áudio não pode ser reproduzido automaticamente devido às restrições do navegador.', error);
    });
});

// Função para alternar o áudio
function toggleAudio() {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}