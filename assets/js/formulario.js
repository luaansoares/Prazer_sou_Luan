emailjs.init("jIlfkywK4VAaSjOnp");

    function mostrarMensagem(texto, erro = false) {
    const msg = document.getElementById("mensagem-alerta");
    msg.textContent = texto;
    msg.classList.remove("erro");
    if (erro) msg.classList.add("erro");
    msg.style.display = "block";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);
    }

    document.getElementById("form_contato").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_lza48to", "template_272fvza", this)
        .then(() => {
        mostrarMensagem("Mensagem enviada com sucesso!");
        this.reset();
        }, (error) => {
        mostrarMensagem("Erro ao enviar. Tente novamente.", true);
        console.error("Erro:", error);
        });
    });