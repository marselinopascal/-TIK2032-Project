document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('autoTypeText');
    const texts = ["Selamat datang di blog saya.", "Temukan rekomendasi film terbaik.", "Semoga terhibur!!!."];
    let textIndex = 0;
    let charIndex = 0;

    function typeWriter() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                textElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100); // Waktu jeda antar karakter (ms)
            } else {
                textIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 1000); // Waktu jeda antar teks (ms)
            }
        }
    }

    typeWriter();
});
