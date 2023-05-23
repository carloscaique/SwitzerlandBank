const formulario = document.getElementById("formulario");
const nomeCompleto = document.getElementById("nome-completo");
const cpf = document.getElementById("cpf");
const nomeDaMae = document.getElementById("nome-da-mae");
const dataDeNascimento = document.getElementById("data-de-nascimento");
const genero = document.getElementById("genero");
const endereco = document.getElementById("endereco");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmacaoDeSenha = document.getElementById("confirmacao-de-senha");

/* Função (evento) submit do botão, quando o botão com a action "submit" ("Abrir Conta") é acionado ele chama a função "CheckInputs" que troca as cores e íncones nos campos */

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //serve para não regarregar a página de novo na hora de enviar

  checkInputs();
});

/* Função de verificar/validar (checar) o valor dos Inputs, de inicio ele só adiciona um valor qualquer nas constantes como "const nomeCompletoValue = nomeCompleto.value" o "nomeCompleto.value" é um valor fictício */

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
    let validNomeCompleto = false;
  } else {
    setSuccessFor(nomeCompleto);
    let validNomeCompleto = true;
  }

  if (cpfValue === "") {
    setErrorFor(cpf, "Por favor, digite seu CPF.");
    let validCpf = false;
  } else {
    setSuccessFor(cpf);
    let validCpf = true;
  }

  if (nomeDaMaeValue === "") {
    setErrorFor(nomeDaMae, "Por favor, digite o nome da sua mãe.");
    let validNomeDaMae = false;
  } else {
    setSuccessFor(nomeDaMae);
    let validNomeDaMae = true;
  }

  if (dataDeNascimentoValue === "") {
    setErrorFor(dataDeNascimento, "Insira sua data de nascimento.");
    let validDataDeNascimento = false;
  } else {
    setSuccessFor(dataDeNascimento);
    let validDataDeNascimento = true;
  }

  if (enderecoValue === "") {
    setErrorFor(endereco, "Este campo é obrigatório");
    let validEndereco = false;
  } else {
    setSuccessFor(endereco);
    let validEndereco = true;
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
    let validEmail = false;
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
    let validEmail = false;
  } else {
    setSuccessFor(email);
    let validEmail = true;
  }

  if (senhaValue === "") {
    setErrorFor(senha, "A senha é obrigatória.");
    let validSenha = false;
  } else if (senhaValue.length < 7) {
    setErrorFor(senha, "A senha precisa ter no mínimo 7 caracteres.");
    let validSenha = false;
  } else {
    setSuccessFor(senha);
    let validSenha = true;
  }

  if (confirmacaoDeSenhaValue === "") {
    setErrorFor(confirmacaoDeSenha, "A confirmação de senha é obrigatória.");
    let validConfirmacaoDeSenha = false;
  } else if (confirmacaoDeSenhaValue !== senhaValue) {
    setErrorFor(confirmacaoDeSenha, "As senhas não conferem.");
    let validConfirmacaoDeSenha = false;
  } else {
    setSuccessFor(confirmacaoDeSenha);
    let validConfirmacaoDeSenha = true;
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

  /* Uma condição que indica no console se o formulário inteiro foi validado */

  if (formularioIsValid) {
    console.log("O formulário está 100% válido!");
    
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<p>Cadastrado com sucesso!<p>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    /** isso é para direcionar para a "HomePage" */
    setTimeout(()=>{
        window.location.href = '../Index.html'
    }, 3000) /** delay de 3s */

  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<p>Preencha todos os campos corretamente antes de abrir uma conta<p>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

/* Função de setar erro que muda a classe do CSS (o que faz mudar a cor)*/

function setErrorFor(input, message) {
  const ControleDoFormulario = input.parentElement; // esse input.parentElement ele retorna a div que é pai dessa classe erro
  const small = ControleDoFormulario.querySelector("small");

  // mensagem de erro
  small.innerText = message;

  // classe de erro
  ControleDoFormulario.className = "controle-do-formulario error"; //aqui ele reescreve a classe para error
}

/* Função de setar sucesso que muda a classe do CSS (o que faz mudar a cor)*/

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
