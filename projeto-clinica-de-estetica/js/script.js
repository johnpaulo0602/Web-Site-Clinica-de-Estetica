
// Variavel
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

