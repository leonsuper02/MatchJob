function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;


     const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

    if (!regexSenha.test(senha)) {
        mensagemErro.textContent = 'A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula e caractere especial.';
        return;
    }
    if (senha !== senha2) {
        document.getElementById('mensagemErro').innerText = "As senhas não coincidem!";
        return;
    }

    // Armazenar nome no localStorage
    localStorage.setItem('nomeUsuario', nome);

    // Redirecionar para a página inicial
    window.location.href = "../iniemp/empre.html";
}