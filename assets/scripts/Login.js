const senha = document.querySelector(".senha");
const olhoMostrar = document.querySelector(".fa-eye");
const olhoOcultar = document.querySelector(".fa-eye-slash");

//função mostrar senha
olhoMostrar.onclick = () => {
  if (senha.type === "password") {
    senha.type = "text";
  } else {
    senha.type = "password";
  }
};

function entrar() {
  let cpfouemail = document.querySelector("#cpf-ou-email");
  let labelCpfOuEmail = document.querySelector("#labelCpfOuEmail");

  let senha = document.querySelector("#senha");
  let labelSenha = document.querySelector("#labelSenha");

  let msgError = document.querySelector("#msgError");
  let listaUser = [];

  let userValid = {
    nome: "",
    cpf: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));

  listaUser.forEach((item) => {
    if (cpfouemail.value == item.cpfCad || cpfouemail.value == item.emailCad && senha.value == item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        cpf: item.cpfCad,
        senha: item.senhaCad,
      };
    }
  });

  console.log(listaUser)
  


}
