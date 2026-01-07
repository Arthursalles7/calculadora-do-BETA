document.addEventListener("DOMContentLoaded", function() {
    const visor = document.getElementById('display');

    window.adicionarAoVisor = function(entrada) {
        // Se o visor estiver com a frase ou com 0, limpamos antes de digitar novo número
        if (visor.value === "0" || visor.value === "Nao sobra nada pro beta") {
            visor.value = entrada;
        } else {
            visor.value += entrada;
        }
    };

    window.limparVisor = function() {
        visor.value = "0";
    };

    window.calcular = function() {
        const conteudoVisor = visor.value;
        const temOperacao = /[\+\-\*\/]/.test(conteudoVisor);

        if (temOperacao) {
            // Mostra a frase no lugar do resultado
            visor.value = "Nao sobra nada pro beta";

            // Opcional: Faz o visor voltar ao "0" depois de 2.5 segundos
            setTimeout(() => {
                if (visor.value === "Nao sobra nada pro beta") {
                    visor.value = "0";
                }
            }, 2500);

        } else {
            // Se não houver operação, avisa que falta algo
            alert("Digite uma conta completa!");
        }
    };
});