document.addEventListener("DOMContentLoaded", function() {

    function startCountdown(duration) {
        let timer = duration, hours, minutes, seconds;
        const display = document.getElementById("contador");

        setInterval(function() {
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

    const modal = document.getElementById('modalPromocao');
    const fecharModal = document.getElementById('fecharModal');
    const botaoModal = document.getElementById('botaoModal');
    const contadorModal = document.getElementById('contadorModal');
    
    setTimeout(function() {
        if (modal) {
            modal.style.display = 'block';
            iniciarContadorModal();
        }
    }, 2000);
    
    if (fecharModal) {
        fecharModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    if (botaoModal) {
        botaoModal.addEventListener('click', function() {
            window.location.href = '#planos-hostinger';
            modal.style.display = 'none';
        });
    }
    
    function iniciarContadorModal() {
        let minutos = 5;
        let segundos = 0;
        
        const intervalo = setInterval(function() {
            if (segundos === 0) {
                if (minutos === 0) {
                    clearInterval(intervalo);
                    contadorModal.textContent = "OFERTA EXPIRADA!";
                    return;
                }
                minutos--;
                segundos = 59;
            } else {
                segundos--;
            }
            
            contadorModal.textContent = 
                (minutos < 10 ? '0' + minutos : minutos) + ':' + 
                (segundos < 10 ? '0' + segundos : segundos);
        }, 1000);
    }
});