// Coleta os dados do form e retorna um objeto
function coletarDados() {
  const nome = document.getElementById("nome").value;
  const raca = document.getElementById("raca").value;
  const idade = document.getElementById("idade").value;
  return { nome, raca, idade };
}

// Limpar o formulário
function resetForm() {
  const nameField = document.getElementById("nome");

  nameField.value = "";
  nameField.focus(); // Retorna o cursor para o campo nome
  document.getElementById("idade").value = "";
  document.getElementById("raca").value = "";
}

function getElementByEvent(event) {
  return event.target;
}

function removeDog(event) {
  event.preventDefault();
  const button = getElementByEvent(event);
  const row = button.closest("tr");
  row.remove();
}

function editDog(event) {
  event.preventDefault();
  const button = getElementByEvent(event);
  const row = button.closest("tr");
  const tds = Array.from(row.getElementsByTagName("td"));
  tds.pop();
  const [nome, idade, raca] = tds.map((td) => td.innerHTML);

  document.getElementById("nome").value = nome;
  document.getElementById("idade").value = idade;
  document.getElementById("raca").value = raca;
  removeDog(event);
}

function addToTable(cachorro) {
  const table = document.getElementsByClassName("dogs")[0];
  const tbody = table.getElementsByTagName("tbody")[0];
  const row = tbody.insertRow(); // Cria uma linha dentro databela
  const nomeCell = row.insertCell();
  const idadeCell = row.insertCell();
  const racaCell = row.insertCell();
  const acoesCell = row.insertCell();

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Excluir";
  deleteButton.addEventListener("click", removeDog);

  const editButton = document.createElement("button");
  editButton.innerHTML = "Editar";
  editButton.addEventListener("click", editDog);

  nomeCell.appendChild(document.createTextNode(cachorro.nome));
  idadeCell.appendChild(document.createTextNode(cachorro.idade));
  racaCell.appendChild(document.createTextNode(cachorro.raca));
  acoesCell.appendChild(deleteButton);
  acoesCell.appendChild(editButton);
}

// Salva o cachorro
function salvar() {
  const cachorro = coletarDados();
  console.log(cachorro);
  addToTable(cachorro);
  resetForm();
}

// Pega o botão na página e adiciona um event listener para o click
const button = document.getElementById("btn-salvar");
button.addEventListener("click", salvar);
