document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById("popup-btn");
    const popup = document.getElementById("popup");

    popupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    window.addEventListener("click", function (event) {
        // Isso evita que clicar fora feche o popup se clicar dentro do formulário
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});


// Inicialização do EmailJS - lembre de usar aspas no seu user ID
(function () {
    emailjs.init("PMVEGfUpeLcUDvoH6"); // Substitua com seu PUBLIC KEY (ex: "sua_public_key")
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Substitua abaixo com os seus IDs corretos do EmailJS
        const serviceID = "service_0n4ipnj";         // <- seu service ID
        const templateID = "template_fw8oeei";       // <- seu template ID

        emailjs.sendForm(serviceID, templateID, this)
            .then(function () {
                alert("Mensagem enviada com sucesso!");
                form.reset();
                document.getElementById("popup").style.display = "none";
            }, function (error) {
                console.error("Erro ao enviar mensagem:", error);
                alert("Erro ao enviar. Tente novamente mais tarde.");
            });
    });
});

