// Se o usuario já tiver login, colocar inf aqui e levara para a pag inicial 
function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    if (email === '' || senha === '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Login realizado com sucesso!');
        window.location.href = "./inicio.html";
    }
}

