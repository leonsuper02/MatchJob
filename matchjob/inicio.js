const vagas = [
    {
        empresa: "CEAP",
        endereco: "R. José Viêira Martins, 270",
        lat: -23.698,
        lng: -46.653,
        area: "tecnologia",
        imagem: "./img/trabalho3.PNG",
        descricao: "Centro educacional com foco em capacitação técnica e inclusão digital.",
        salario: "R$ 3.200,00",
        localTrabalho: "Presencial",
        beneficios: "Vale-transporte, Vale-refeição , Plano de saúde",
        horario: "08h às 17h (segunda a sexta)"
    },
    {
        empresa: "EcoLog",
        endereco: "Av. Verde, 45",
        lat: -23.700,
        lng: -46.650,
        area: "logística",
        imagem: "./img/trabalho1.PNG",
        descricao: "Empresa especializada em transporte sustentável e logística verde.",
        salario: "R$ 2.800,00",
        localTrabalho: "Híbrido",
        beneficios: "Auxílio combustível Gympass",
        horario: "07h às 16h (segunda a sábado)"
    },
    {
        empresa: "BioVita",
        endereco: "Rua da Saúde, 88",
        lat: -23.695,
        lng: -46.655,
        area: "farmácia",
        imagem: "./img/trabalho2.PNG",
        descricao: "Laboratório farmacêutico inovador, focado em saúde e bem-estar.",
        salario: "R$ 3.600,00",
        localTrabalho: "Presencial",
        beneficios: "Plano odontológico, Bônus por desempenho",
        horario: "09h às 18h (segunda a sexta)"
    },
    {
        empresa: "EduMais",
        endereco: "Av. Ensino, 10",
        lat: -23.702,
        lng: -46.648,
        area: "educação",
        imagem: "./img/trabalho4.PNG",
        descricao: "Instituição de ensino EAD com foco em educação acessível e moderna.",
        salario: "R$ 2.500,00",
        localTrabalho: "Home Office",
        beneficios: "Horário flexível, Cursos gratuitos",
        horario: "Flexível (carga horária de 40h/semana)"
    }
];


window.onload = function() {
    const nome = localStorage.getItem('nomeUsuario');

    if (nome) {
        document.getElementById('nome-usuario').innerText = nome;
        document.getElementById('nome-curto').innerText = nome;
        document.getElementById('nome-completo').innerText = nome;
    }

    const fotoSalva = localStorage.getItem('fotoPerfil');

    if (fotoSalva) {
        document.getElementById('foto-usuario').src = fotoSalva;
    }
}
document.getElementById('input-foto').addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgData = e.target.result;

            // Salva no localStorage
            localStorage.setItem('fotoPerfil', imgData);

            // Atualiza a foto
            document.getElementById('foto-usuario').src = imgData;
        };

        reader.readAsDataURL(file);
    }
});

window.onload = function() {
    const nome = localStorage.getItem('nomeUsuario');
    if (nome) {
        document.getElementById('nome-usuario').innerText = nome;
        document.getElementById('nome-curto').innerText = nome;
        document.getElementById('nome-completo').innerText = nome;
    }

    const fotoSalva = localStorage.getItem('fotoPerfil');
    if (fotoSalva) {
        document.getElementById('foto-usuario').src = fotoSalva;
        document.getElementById('modal-foto-perfil').src = fotoSalva;
    }
};

document.getElementById('input-foto').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgData = e.target.result;
            localStorage.setItem('fotoPerfil', imgData);
            document.getElementById('foto-usuario').src = imgData;
            document.getElementById('modal-foto-perfil').src = imgData;
        };
        reader.readAsDataURL(file);
    }
});




// Abrir barra lateral
function toggleMenu() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Carregar foto salva no localStorage
document.addEventListener("DOMContentLoaded", () => {
    const imagemSalva = localStorage.getItem("fotoUsuario");
    if (imagemSalva) {
        document.getElementById("foto-usuario").src = imagemSalva;
    }
});

// Ao escolher um arquivo, atualizar foto e salvar localmente
// document.getElementById("input-foto").addEventListener("change", function () {
//     const file = this.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = function (e) {
//         const imgData = e.target.result;
//         document.getElementById("foto-usuario").src = imgData;
//         localStorage.setItem("fotoUsuario", imgData);
//     };
//     reader.readAsDataURL(file);
// });
document.getElementById("input-foto").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageData = e.target.result;
            localStorage.setItem("fotoUsuario", imageData);
            document.getElementById("foto-usuario").src = imageData;
        };
        reader.readAsDataURL(file);
    }
});

function logout() {
    localStorage.removeItem("usuarioLogado");  // limpa nome
    localStorage.removeItem("fotoUsuario");    // limpa foto
    window.location.href = "./index.html";     // redireciona para login
}


// Mostrar a div de inicio
function mostrarInicio() { 
    document.getElementById("inicio").style.display = "block";
    document.getElementById("principal").style.display = "none";
    document.getElementById("secundario").style.display = "none";
    document.getElementById("terciario").style.display = "none";
}

// Mostrar a div Enviar curriculo
function mostrarDiv1() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("principal").style.display = "block";
    document.getElementById("secundario").style.display = "none";
    document.getElementById("terciario").style.display = "none";
}

// Mostra a div Empresas interessadas
function mostrarDiv2() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("principal").style.display = "none";
    document.getElementById("secundario").style.display = "block";
    document.getElementById("terciario").style.display = "none";

    carregarEmpresasInteressadas();
}


// Mostrar a div Sobre nós
function mostrarDiv3() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("principal").style.display = "none";
    document.getElementById("secundario").style.display = "none";
    document.getElementById("terciario").style.display = "block";
}

// Abrir opção sair da conta
// function toggleUserMenu() {
//     let userMenu = document.getElementById('user-menu');
//     userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
// }
function toggleUserMenu() {
    const userMenu = document.getElementById('user-menu');
    userMenu.classList.toggle('show');
}
// Fecha o user-menu ao clicar fora
document.addEventListener('click', function (event) {
    const userMenu = document.getElementById('user-menu');
    const userIcon = document.getElementById('foto-usuario');

    if (
        userMenu.classList.contains('show') &&
        !userMenu.contains(event.target) &&
        !userIcon.contains(event.target)
    ) {
        userMenu.classList.remove('show');
    }
});

// Fecha o menu lateral quando uma opção for clicada
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });
});

// Fecha o menu lateral ao clicar fora dele
document.addEventListener('click', function (e) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');

    if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        sidebar.classList.remove('open');
    }
});




document.addEventListener("DOMContentLoaded", () => {
    const setnome = localStorage.getItem("usuarioLogado");
    if (setnome) {
        const nomeElemento = document.getElementById("nome-usuario");
        if (nomeElemento) nomeElemento.textContent = setnome;
    }
});

// No banco de dados colocar quando o botão for apertado, fechar o login, volta para a parte de login funcionando 


// ========================
// Marcar menu-link selecionado
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.forEach(l => l.classList.remove('selected'));
            link.classList.add('selected');
        });
    });
});




// Simula a empresa selecionada anteriormente
document.addEventListener("DOMContentLoaded", () => {
    const empresa = localStorage.getItem("empresaSelecionada");
    if (empresa && document.getElementById("nome-empresa")) {
        document.getElementById("nome-empresa").innerText = empresa;
    }
});


document.getElementById('form-curriculo').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('nome-empresa').innerText;

    // Aqui você poderia armazenar no localStorage ou backend
    const infoEnvio = {
        nome: nome,
        empresa: empresa,
        data: new Date().toLocaleString(),
        mensagem: document.getElementById('mensagem').value
    };

    // Recupera lista anterior (se houver)
    const enviosAnteriores = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];

    // Adiciona o novo envio
    enviosAnteriores.push(infoEnvio);

    // Salva de volta
    localStorage.setItem('enviosCurriculo', JSON.stringify(enviosAnteriores));


    document.getElementById('empresa-confirmada').innerText = empresa;
    document.getElementById('mensagem-sucesso').style.display = 'block';
    document.getElementById('form-curriculo').reset();
});




// Simular banco de dados local com dados das empresas
const empresas = {
    "trabalho 1": {
        nome: "TechNova",
        descricao: "Empresa de tecnologia focada em IA e automação.",
        beneficios: "Vale-refeição, home office, plano de saúde."
    },
    "trabalho 2": {
        nome: "BioVita",
        descricao: "Laboratório farmacêutico inovador.",
        beneficios: "Plano odontológico, bônus semestrais."
    },
    "trabalho 3": {
        nome: "EcoLog",
        descricao: "Logística sustentável e transporte ecológico.",
        beneficios: "Auxílio transporte, gympass."
    },
    "trabalho 4": {
        nome: "EduMais",
        descricao: "Plataforma de ensino EAD com foco em inclusão.",
        beneficios: "Horário flexível, cursos gratuitos."
    }
};

// Associar evento aos botões
document.querySelectorAll(".opc button").forEach(botao => {
    botao.addEventListener("click", () => {
        const idTrabalho = botao.textContent.trim();
        const empresa = empresas[idTrabalho];

        if (empresa) {
            document.getElementById("detalhes-empresa").style.display = "block";
            document.getElementById("nome-empresa-exibida").innerText = "Empresa: " + empresa.nome;
            document.getElementById("descricao-empresa").innerText = "Descrição: " + empresa.descricao;
            document.getElementById("beneficios-empresa").innerText = "Benefícios: " + empresa.beneficios;

            // Salvar no localStorage
            localStorage.setItem("empresaSelecionada", empresa.nome);
        }
    });
});

// Ir para aba de currículo com empresa já carregada
function enviarParaCurriculo() {
    mostrarDiv1(); // já existe no seu código
    const empresa = localStorage.getItem("empresaSelecionada");
    if (empresa && document.getElementById("nome-empresa")) {
        document.getElementById("nome-empresa").innerText = empresa;
    }
}



// function carregarEmpresasInteressadas() {
//     const envios = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];
//     const divEnvio = document.querySelector('.enviado');
//     divEnvio.innerHTML = ''; // limpa

//     envios.reverse().forEach((envio, index) => {
//         const card = document.createElement('div');
//         card.classList.add('card-empresa');
//         card.innerHTML = `
//             <p><strong>Empresa:</strong> ${envio.empresa}</p>
//             <p><strong>Enviado por:</strong> ${envio.nome}</p>
//             <p><strong>Mensagem:</strong> ${envio.mensagem || '---'}</p>
//             <p><strong>Data:</strong> ${envio.data}</p>
//             <p><strong>Status:</strong> ${envio.status || '🕒 Aguardando resposta'}</p>
//             <div style="margin-top: 10px;">
//                 <button onclick="cancelarEnvio(${envios.length - 1 - index})" style="margin-right: 8px;">❌ Cancelar</button>
//                 <button onclick="simularResposta(${envios.length - 1 - index})">📩 Simular Resposta</button>
//             </div>
//         `;
//         divEnvio.appendChild(card);
//     });
// }
function carregarEmpresasInteressadas() {
    const envios = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];

    const divEnvio = document.querySelector('.enviado');
    const divResposta = document.querySelector('.resposta');
    divEnvio.innerHTML = '';
    divResposta.innerHTML = '';

    envios.forEach((envio, index) => {
        const card = document.createElement('div');
        card.classList.add('card-empresa');
        card.innerHTML = `
            <p><strong>Empresa:</strong> ${envio.empresa}</p>
            <p><strong>Enviado por:</strong> ${envio.nome}</p>
            <p><strong>Mensagem:</strong> ${envio.mensagem || '---'}</p>
            <p><strong>Data:</strong> ${envio.data}</p>
            <p><strong>Status:</strong> ${envio.status || '🕒 Aguardando resposta'}</p>
        `;

        const botoes = document.createElement('div');
        botoes.style.marginTop = '10px';

        if (!envio.status || envio.status.includes('Aguardando')) {
            const btnCancelar = document.createElement('button');
            btnCancelar.textContent = '❌ Cancelar Envio';
            btnCancelar.classList.add('botao-acao', 'botao-cancelar');
            btnCancelar.style.marginRight = '8px';
            btnCancelar.onclick = () => cancelarEnvio(index);

            const btnSimular = document.createElement('button');
            btnSimular.textContent = '📩 Simular Resposta';
            btnSimular.onclick = () => simularResposta(index);

            botoes.appendChild(btnCancelar);
            botoes.appendChild(btnSimular);

            card.appendChild(botoes);
            divEnvio.appendChild(card);
        // } else {
        //     divResposta.appendChild(card);
        // }
        } else {
    const btnVerResposta = document.createElement('button');
    btnVerResposta.textContent = '👁 Ver Resposta';
    btnVerResposta.classList.add('botao-acao', 'botao-resposta');

    btnVerResposta.onclick = () => {
        const modal = document.getElementById('modal-resposta');
        const texto = document.getElementById('texto-resposta');
    
        texto.innerText = `Parabéns! Você foi selecionado para a próxima fase na empresa "${envio.empresa}". Entraremos em contato por e-mail.`;
        modal.style.display = 'flex';
    };
    // Detecta clique fora da modal-conteudo
document.getElementById('modal-resposta').addEventListener('click', function(event) {
    // Se o clique for diretamente no overlay (não na modal-conteudo ou nos filhos dela)
    if (event.target === this) {
        // Esconde a modal
        this.style.display = 'none';
        
        // Volta para a página anterior
        window.history.back();
    }
});

    botoes.appendChild(btnVerResposta);
    card.appendChild(botoes);
    divResposta.appendChild(card);
}

    });
}


document.querySelector('.input-group input').addEventListener('change', () => {
    mostrarVagasProximas();
});

// Mexer aqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq


// function mostrarVagasProximas() {
//     // Apenas exibe as vagas como simulação
//     const vagasDiv = document.getElementById('detalhes-empresa');
//     vagasDiv.innerHTML = '<h3>Vagas próximas a você:</h3>';

//     vagas.forEach(vaga => {
//         const vagaHTML = `
//             <div class="card-empresa">
//                 <p><strong>${vaga.empresa}</strong></p>
//                 <p>${vaga.endereco}</p>
//                 <p>Área: ${vaga.area}</p>
//             </div>
//         `;
//         vagasDiv.innerHTML += vagaHTML;
//     });

//     vagasDiv.style.display = 'block';
// }

// até aqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq


document.getElementById("busca-endereco").addEventListener("input", filtrarTrabalhos);


function filtrarTrabalhos() {
    const termo = document.getElementById("text").value.toLowerCase();
    const container = document.getElementById("lista-trabalhos");
    container.innerHTML = "";
    

    let filtradas = vagas.filter(v => v.area.includes(termo));
    if (filtradas.length === 0) filtradas = vagas;

    filtradas.forEach(vaga => {
        const card = document.createElement("div");
        card.className = "card-empresa";

        card.innerHTML = `
            <img src="${vaga.imagem}" alt="${vaga.empresa}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 10px; margin-bottom: 10px;">
            <p class="nome-empresa"><strong>${vaga.empresa}</strong></p>
            <p><strong>Endereço:</strong> ${vaga.endereco}</p>
            <p><strong>Área:</strong> ${vaga.area}</p>
            <p><strong>Salário:</strong> ${vaga.salario}</p>
            <p><strong>Local de Trabalho:</strong> ${vaga.localTrabalho}</p>
            <p><strong>Horário:</strong> ${vaga.horario}</p>
            <p><strong>Beneficios:</strong> ${vaga.beneficios}</p>
            <p><strong>Descrição:</strong> ${vaga.descricao}</p>
            <button onclick="selecionarEmpresa('${vaga.empresa}')">Enviar Currículo</button>
        `;
        container.appendChild(card);
    });
}



function selecionarEmpresa(nomeEmpresa) {
    localStorage.setItem("empresaSelecionada", nomeEmpresa);
    mostrarDiv1(); // leva para aba Enviar Currículo
    document.getElementById("nome-empresa").innerText = nomeEmpresa;
}



function cancelarEnvio(index) {
    const envios = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];
    envios.splice(index, 1); // remove pelo índice
    localStorage.setItem('enviosCurriculo', JSON.stringify(envios));
    carregarEmpresasInteressadas();
}

// function simularResposta(index) {
//     const envios = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];
//     envios[index].status = "✅ Respondido pela empresa";
//     localStorage.setItem('enviosCurriculo', JSON.stringify(envios));
//     carregarEmpresasInteressadas();
// }

function simularResposta(index) {
    const envios = JSON.parse(localStorage.getItem('enviosCurriculo')) || [];

    // Atualiza status do envio
    if (envios[index]) {
        envios[index].status = "✅ Respondido pela empresa";
        localStorage.setItem('enviosCurriculo', JSON.stringify(envios));
    }

    // Recarrega as duas colunas (enviado e resposta)
    carregarEmpresasInteressadas();
}

// mapa

let mapa = L.map('mapa-leaflet').setView([-23.55052, -46.633308], 13); // posição inicial (São Paulo)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap',
}).addTo(mapa);

let marcador = L.marker([-23.55052, -46.633308]).addTo(mapa);

// Função para buscar e centralizar o mapa por endereço
document.getElementById('busca-endereco').addEventListener('input', function (e) {
    const endereco = e.target.value;

    if (endereco.length > 4) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const latitude = parseFloat(data[0].lat);
                    const longitude = parseFloat(data[0].lon);

                    mapa.setView([latitude, longitude], 15);
                    marcador.setLatLng([latitude, longitude]);
                }
            })
            .catch(err => console.error("Erro na geocodificação:", err));
    }
});


function fecharModalResposta() {
    const modal = document.getElementById("modal-resposta");
    if (modal) {
        modal.style.display = "none";
    }
}

function abrirModalStatus() {
    const modal = document.getElementById("modal-status");
    if (modal) {
        modal.style.display = "flex";
    }
}

function fecharModalStatus() {
    const modal = document.getElementById("modal-status");
    if (modal) {
        modal.style.display = "none";
    }
}

function carregarDadosUsuario() {
    const nome = localStorage.getItem("usuarioLogado") || "Usuário";
    const foto = localStorage.getItem("fotoUsuario");

    // Nome nos lugares certos
    document.getElementById("nome-usuario").innerText = nome;
    document.getElementById("nome-curto").innerText = nome;
    document.getElementById("nome-completo").innerText = nome;

    // Foto no topo
    if (foto) {
        document.getElementById("foto-usuario").src = foto;
    }

    // Foto dentro da modal de status
    const conteudoModal = document.querySelector("#modal-status .modal-conteudo");
    let img = document.getElementById("foto-status");
    if (!img) {
        img = document.createElement("img");
        img.id = "foto-status";
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.borderRadius = "50%";
        img.style.margin = "10px 0";
        conteudoModal.insertBefore(img, conteudoModal.children[1]); // logo após o título
    }
    if (foto) {
        img.src = foto;
    }
}

carregarDadosUsuario();
