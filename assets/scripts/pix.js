let btn_aleatorio = document.getElementById("chave_Aleatorio");
let btn_cpf = document.getElementById("chave_Cpf");
let btn_telefone = document.getElementById("chave_Telefone");

let resultado = document.getElementById("chave_Escolhida");
btn_aleatorio.addEventListener("click",function(){
    resultado.innerHTML = btn_aleatorio.innerHTML
})

btn_cpf.addEventListener("click",function(){
    resultado.innerHTML = btn_cpf.innerHTML
})

btn_telefone.addEventListener("click",function(){
    resultado.innerHTML = btn_telefone.innerHTML
})