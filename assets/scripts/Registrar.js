const formulario = document.getElementById("formulario");
const nomeCompleto = document.getElementById("nome-completo");
const cpf = document.getElementById("cpf");
const nomeDaMae = document.getElementById("nome-da-mae");
const dataDeNascimento = document.getElementById("data-de-nascimento");
const endereco = document.getElementById("endereco");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacaoDeSenha = document.getElementById("confirmacao-de-senha");

function registrar() {
  alert("botao");
}

/* Função submit do botão */

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //serve para não regarregar a página de novo na hora de enviar

  checkInputs();
});

/* Função de verificar/validar o valor dos Inputs */

function checkInputs() {
  const nomeCompletoValue = nomeCompleto.value;
  const cpfValue = cpf.value;
  const nomeDaMaeValue = nomeDaMae.value;
  const dataDeNascimentoValue = dataDeNascimento.value;
  const enderecoValue = endereco.value;
  const emailValue = email.value;
  const senhaValue = senha.value;
  const confirmacaoDeSenhaValue = confirmacaoDeSenha.value;

  /* Condições de verificação de dados */

  if (nomeCompletoValue === "") {
    setErrorFor(nomeCompleto, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(nomeCompleto);
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "Por favor, digite seu CPF.");
  } else {
    setSuccessFor(cpf);
  }

  if (nomeDaMaeValue === "") {
    setErrorFor(nomeDaMae, "Por favor, digite o nome da sua mãe.");
  } else {
    setSuccessFor(nomeDaMae);
  }

  if (dataDeNascimentoValue === "") {
    setErrorFor(dataDeNascimento, "Insira sua data de nascimento.");
  } else {
    setSuccessFor(dataDeNascimento);
  }

  if (enderecoValue === "") {
    setErrorFor(endereco, "Este campo é obrigatório");
  } else {
    setSuccessFor(endereco);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (senhaValue === "") {
    setErrorFor(senha, "A senha é obrigatória.");
  } else if (senhaValue.length < 7) {
    setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(senha);
  }

  if (confirmacaoDeSenhaValue === "") {
    setErrorFor(confirmacaoDeSenha, "A confirmação de senha é obrigatória.");
  } else if (confirmacaoDeSenhaValue !== senhaValue) {
    setErrorFor(confirmacaoDeSenha, "As senhas não conferem.");
  } else {
    setSuccessFor(confirmacaoDeSenha);
  }

  const controleDoFormularios = formulario.querySelectorAll(
    ".controle-do-formulario"
  );

  const formularioIsValid = [...controleDoFormularios].every(
    (controleDoFormulario) => {
      return (
        controleDoFormulario.className === "controle-do-formulario success"
      );
    }
  );

/* Uma função que indica no console se o formulário inteiro foi validado */

  if (formularioIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

/* Função de setar erro */

function setErrorFor(input, message) {
  const ControleDoFormulario = input.parentElement; // esse input.parentElement ele retorna a div que é pai dessa classe erro
  const small = ControleDoFormulario.querySelector("small");

  // mensagem de erro
  small.innerText = message;

  // classe de erro
  ControleDoFormulario.className = "controle-do-formulario error"; //aqui ele reescreve a classe para error
}

/* Função de setar sucesso */

function setSuccessFor(input) {
  const controleDoFormulario = input.parentElement;

  // Classe de sucesso
  controleDoFormulario.className = "controle-do-formulario success";
}

/* Função que verifica se o email é válido */

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

