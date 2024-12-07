// Definindo a data inicial e a data de lançamento
const startDate = new Date('2024-06-12T18:30:00');
const releaseDate = new Date('2026-06-12T00:00:00');

// Função que atualiza o contador de tempo
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

    // Exibe a mensagem de "Volte em 12/06/2026" quando o tempo atingir a data de lançamento
    if (now >= releaseDate) {
        document.getElementById("final-message").style.display = "none";
    }
}

// Renderiza os dígitos do contador na interface
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

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
updateCounter();

// Volta ao topo suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostra ou oculta a mensagem oculta ao clicar no botão
function revealMessage() {
    const message = document.getElementById('hidden-message');
    message.style.display = message.style.display === 'none' ? 'block' : 'none';
}

// Seleção dos botões "Sim" e "Não"
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Função para clicar no "Sim"
yesBtn.addEventListener('click', () => {
    alert('Sabia que você iria aceitar, por isso que eu te amoooooo! ❤️');
});

// Função para clicar no "Não"
noBtn.addEventListener('click', () => {
    // Adiciona animação para o botão "Não" criar pernas e começar a andar
    noBtn.classList.add('fugindo');

    // Cria as "pernas" e adiciona ao botão
    const legs = document.createElement('div');
    legs.classList.add('legs');

    // Adiciona duas pernas
    const leg1 = document.createElement('div');
    leg1.classList.add('leg');
    const leg2 = document.createElement('div');
    leg2.classList.add('leg');

    legs.appendChild(leg1);
    legs.appendChild(leg2);

    noBtn.appendChild(legs);

    // Cria o balão de fala
    const speechBubble = document.createElement('div');
    speechBubble.classList.add('speech-bubble');
    speechBubble.innerText = 'Estou caindo fora';

    // Adiciona o balão de fala ao botão
    noBtn.appendChild(speechBubble);

    // Após 3 segundos, o balão de fala desaparece
    setTimeout(() => {
        speechBubble.style.display = 'none';
    }, 3000);
});

// Chama a verificação ao carregar o site
checkProposalDate();

// Função para verificar a data da proposta
function checkProposalDate() {
    const currentDate = new Date();

    if (currentDate >= releaseDate) {
        document.getElementById("proposal-section").style.display = "block";
    } else {
        console.log("A surpresa ainda não pode ser revelada! 🕒");
    }
}

// Adicionando o evento do botão de áudio
const audioBtn = document.getElementById('audio-btn');
const audio = new Audio('musica.mp3'); // Substitua pelo caminho do seu áudio

audioBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        audioBtn.innerHTML = '🔊';
    } else {
        audio.pause();
        audioBtn.innerHTML = '🔇';
    }
});

// Função para fechar a mensagem quando clicar no botão (X)
function closeMessage() {
    const message = document.getElementById('hidden-message');
    message.style.display = 'none'; // Esconde a mensagem
}
