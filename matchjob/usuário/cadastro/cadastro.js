// // quando o usuario colocar nome, gmail e senha, levar para a pagina inicial
// function cadastrar() {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const senha2 = document.getElementById('senha2').value;
//     const mensagemErro = document.getElementById('mensagemErro');

//     // Limpa a mensagem toda vez que a função é chamada
//     mensagemErro.textContent = '';

//     if (nome === '' || email === '' || senha === '' || senha2 === '') {
//         mensagemErro.textContent = 'Preencha todos os campos!';
//         return;
//     }

//     if (senha !== senha2) {
//         mensagemErro.textContent = 'As senhas não coincidem. Verifique e tente novamente.';
//         return;
//     }

//     mensagemErro.style.color = 'green';
//     mensagemErro.textContent = 'Cadastro realizado com sucesso!';
//     localStorage.setItem("usuarioLogado", nome);
//     setTimeout(() => {
//         window.location.href = "inicio.html";
//     }, 1500);  // dá um tempo para o usuário ver a mensagem antes de redirecionar
// }
function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senha2 = document.getElementById('senha2').value;

    if (senha !== senha2) {
        document.getElementById('mensagemErro').innerText = "As senhas não coincidem!";
        return;
    }

    // Armazenar nome no localStorage
    localStorage.setItem('nomeUsuario', nome);

    // Redirecionar para a página inicial
    window.location.href = "../inicio/inicio.html";
}
