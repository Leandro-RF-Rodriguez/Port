document.addEventListener("DOMContentLoaded", function () {
    const popupBtn = document.getElementById("popup-btn");
    const popup = document.getElementById("popup");

    // Exibe o popup ao clicar no botão
    popupBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Fecha o popup se clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Inicialização do EmailJS (utilize sua chave pública, caso necessário)
    emailjs.init("PMVEGfUpeLcUDvoH6");

    // Manipulação do envio do formulário
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Previne o comportamento padrão de envio do formulário

        const serviceID = "service_0n4ipnj";
        const templateID = "template_mgiuisi";

        // Coleta o valor do e-mail preenchido no formulário
        const userEmail = document.querySelector('[name="user_email"]').value;

        // Atualiza o valor do e-mail no modelo de template
        form.user_email.value = userEmail;

        // Envia o formulário para o EmailJS
        emailjs.sendForm(serviceID, templateID, form)
            .then(function (response) {
                alert("Mensagem enviada com sucesso!");
                form.reset(); // Limpa os campos do formulário
                popup.style.display = "none"; // Fecha o popup
            }, function (error) {
                console.error("Erro ao enviar mensagem:", error);
                alert("Erro ao enviar. Tente novamente mais tarde.");
            });
    });
});
