// TROCA DE TEMA
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
}

function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}


window.onload = () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "dark") document.body.classList.add("dark");
};

// VALIDAÇÃO DO FORMULÁRIO / SIMULAÇÃO DE ENVIO
function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !msg) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, informe um e-mail válido.");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}
