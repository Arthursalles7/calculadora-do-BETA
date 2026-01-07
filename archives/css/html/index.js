document.addEventListener("DOMContentLoaded", function () {
    const visor = document.getElementById('display');
    const modal = document.getElementById('meuPopUp');

    window.adicionarAoVisor = function (entrada) {
        if (visor.value === "0") {
            visor.value = entrada;
        } else {
            visor.value += entrada;
        }
    };

    window.limparVisor = function () {
        visor.value = "0";
    };

    window.calcular = function () {
        const conteudoVisor = visor.value;


        const temOperacao = /[\+\-\*\/]/.test(conteudoVisor);

        if (temOperacao) {
            visor.value = "0";
            modal.style.display = "block";
        } else {
            // Se for só um número, não faz nada ou avisa o erro
            console.log("Cálculo negado: Insira uma operação (ex: 5+2)");
        }
    };

    window.fecharPopUp = function () {
        modal.style.display = "none";
    };
});