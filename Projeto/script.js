document.addEventListener("DOMContentLoaded", function () {
    // Contagem regressiva
    function startCountdown(duration) {
        let timer = duration, hours, minutes, seconds;
        const display = document.getElementById("contador");

        setInterval(function () {
            hours = Math.floor(timer / 3600);
            minutes = Math.floor((timer % 3600) / 60);
            seconds = timer % 60;

            display.textContent =
                (hours < 10 ? "0" : "") + hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    startCountdown(3600);

    // Pop-up de promoção
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");

    // Exibir popup após 3 segundos
    setTimeout(() => {
        popup.style.display = "flex";
    }, 3000);

    // Fechar popup
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
});