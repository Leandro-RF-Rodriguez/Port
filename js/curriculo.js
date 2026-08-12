document.addEventListener("DOMContentLoaded", function () {
    const botoesFiltro = document.querySelectorAll(".filtro-btn");
    const itensTimeline = document.querySelectorAll(".timeline-item");

    if (!botoesFiltro.length || !itensTimeline.length) {
        return;
    }

    botoesFiltro.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const filtroEscolhido = botao.getAttribute("data-filtro");

            // Marca visualmente qual botão está ativo
            botoesFiltro.forEach(function (b) {
                b.classList.remove("ativo");
            });
            botao.classList.add("ativo");

            // Mostra apenas os itens do tipo escolhido (ou todos)
            itensTimeline.forEach(function (item) {
                const tipoDoItem = item.getAttribute("data-tipo");
                const deveMostrar = filtroEscolhido === "Todos" || tipoDoItem === filtroEscolhido;
                item.hidden = !deveMostrar;
            });
        });
    });
});
