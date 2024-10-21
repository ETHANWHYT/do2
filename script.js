let moveInterval;

function dateAccepted() {
    const confirmation = document.getElementById("confirmation");
    confirmation.style.display = "block";
    launchConfetti();
    clearInterval(moveInterval); // Stop moving the No button
}

function keepAsking() {
    const questionText = document.querySelector(".content h2");
    questionText.innerHTML = "Are you sure? Think of the fun! 😢💔";
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    // Move the button to a new random position
    noButton.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 150 - 75}px)`;
}

// Start moving the No button when the page loads
function startMovingNoButton() {
    moveNoButton(); // Initial position
    moveInterval = setInterval(moveNoButton, 500); // Move every 500 ms
}

function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const isChecked = document.getElementById("musicCheckbox").checked;
    if (isChecked) {
        music.volume = 0;
        music.play();
        fadeInMusic(music);
    } else {
        fadeOutMusic(music);
    }
}

function fadeInMusic(music) {
    let volume = 0;
    const fade = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 100);
}

function fadeOutMusic(music) {
    let volume = 1;
    const fade = setInterval(() => {
        if (volume > 0) {
            volume -= 0.05;
            music.volume = volume;
        } else {
            music.pause();
            clearInterval(fade);
        }
    }, 100);
}

function launchConfetti() {
    const confetti = document.getElementById("confetti");
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
        confetti.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.remove();
        }, 5000); // Remove after 5 seconds
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Start moving the No button as soon as the page loads
window.onload = startMovingNoButton;
