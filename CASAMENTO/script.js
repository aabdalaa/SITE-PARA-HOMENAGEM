document.getElementById('yes-btn').addEventListener('click', () => {
    alert('Eu sabia que você iria aceitar! Vamos ser felizes juntos para sempre! 💍');
});

document.getElementById('no-btn').addEventListener('click', () => {
    const noBtn = document.getElementById('no-btn');
    noBtn.textContent = "Estou indo embora... 😢";

    // Animação para "fugir"
    noBtn.classList.add('moving-away');
    setTimeout(() => {
        alert('Não pode fugir, te amo muito! ❤️');
    }, 500);
});

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

setTimeout(openLightbox, 3000); // Mostra o anel após 3 segundos
