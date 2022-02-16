// Criar o formulário
// 1 input text - nome
// 1 select para raça
// 1 inpit de numero - idade
// button save

// Criar uma variavél e colocar dentro dela o Valor que está no input nome, raça e idade.
function coletarDados() {
  const nome = document.getElementById("nome").value;
  const raca = document.getElementById("idade").value;
  const idade = document.getElementById("raca").value;
  return {
    nome,
    raca,
    idade,
  };
}

function salvar() {
  const cachorro = coletarDados();
  console.log(cachorro);
}

const button = document.getElementById("btn-salvar");
button.addEventListener("click", salvar);

// Criar uma nova linha na tabela e adicionar 4 colunas
// Colocar na 1ª coluna o valor da variavel nome
// Colocar na 2ª coluna o valor da variavel raça
// Colocar na 3ª coluna o valor da variavel idade

// Limpar o formulário
function ClearDados() {}
