// Seleciona elementos
const form = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagemSucesso');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita recarregar a página

    // Mostrar a mensagem de sucesso
    mensagem.classList.add('mostrar');

    // Limpar o formulário
    form.reset();

    // Esconder a mensagem após 5 segundos
    setTimeout(() => {
        mensagem.classList.remove('mostrar');
    }, 5000);
    setTimeout(function() {
    window.location.href = "index.html";
    }, 600);

});
