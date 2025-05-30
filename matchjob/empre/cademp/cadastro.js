function cadastrar() {
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;
    const mensagemErro = document.getElementById('mensagemErro');

    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!regexSenha.test(senha)) {
        mensagemErro.textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula e caractere especial.';
        return;
    }

    if (senha !== senha2) {
        mensagemErro.textContent = 'As senhas não coincidem.';
        return;
    }

// Armazenar nome no localStorage
    localStorage.setItem('nomeUsuario', nome);

    // Redirecionar para a página inicial
    window.location.href = "../inicio/inicio.html";
}