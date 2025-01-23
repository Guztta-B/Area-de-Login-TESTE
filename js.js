
    // Função que será executada ao carregar a página
    window.onload = function() {
      let countdown = 5; // Tempo em segundos para o redirecionamento
      const countdownElement = document.getElementById('countdown');

      // Atualiza o contador a cada segundo
      const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown; // Atualiza o número na página

        if (countdown <= 0) {
          clearInterval(timer); // Para o contador
          window.location.href = "index.html"; // URL de destino
        }
      }, 1000);
    };
