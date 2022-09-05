// ==========================Inicio Carrossel

let count = 1;
document.getElementById("radio1").checked = true;

// executar a function nextimage de 2 em 2 segundos
setInterval(function(){
    nextimage();
}, 5000 )

// função para mudar a imagem
function nextimage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

//========================== Final carrossel

//========================== Inicio Login


// Alternar entre o formulario de login e cadastro além de mudar a cor do botao
let formEntrar = document.querySelector('#formEntrar')
let formCadastro = document.querySelector('#formCadastro')
let btnColor = document.querySelector('.btnColor')

document.querySelector('#btnEntrar')
    .addEventListener('click', () => {
        formEntrar.style.left = "25px"
        formCadastro.style.left = "460px"
        btnColor.style.left = "0px"
})

document.querySelector('#btnCadastro')
    .addEventListener('click', () => {
        formEntrar.style.left = "460px"
        formCadastro.style.left = "25px"
        btnColor.style.left = "165px"
})

// função para mostrar o formulario de cadastro
const showCadastro = document.querySelector("#showCadastro")
const cadastroEmbrulho = document.querySelector('.cadastroEmbrulho')

showCadastro.addEventListener('click', () => {
    cadastroEmbrulho.style.display = 'block'
})

// função para fechar o formulário quando clicado no x ou fora do formulario
cadastroEmbrulho.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]

if (classNameOfClickedElement === 'fa-solid' || classNameOfClickedElement === 'cadastroEmbrulho') {
    cadastroEmbrulho.style.display = 'none'}
})


// Função para mostrar alert de login realizado

function loginsuccess(){
    let loginEmail = document.querySelector('#loginEmail').value;
    let loginPassword = document.querySelector('#loginPassword').value;

    if (loginEmail != "" && loginPassword != "") {
        alert('Login realizado com sucesso!')
    }
}


// função para mostrar alert de cadastro realizado
function registersuccess(){
    let registerEmail = document.querySelector('#registerEmail').value;
    let registerPassword = document.querySelector('#registerPassword').value;
    let registerPassword2 = document.querySelector('#registerPassword2').value;

    if (registerEmail != "" && registerPassword != "" && registerPassword2 != "") {
        alert('Cadastro realizado com sucesso!')
    }
}


// ==========================Final Login