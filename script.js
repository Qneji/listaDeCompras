const newItem = document.getElementById("newItem") // capturando o novo item digitado pelo usuario
const addItem = document.getElementById("addItem") // capturando o botao
let listaTarefas = document.getElementById("list") // capturando a lista (ul)
const labels = document.createElement("label") // criando o label
labels.classList.add("checkbox-label") // adicionando classe ao label
const butonLixeira = document.createElement("button") // capturando o botao lixeira
butonLixeira.classList.add("lixeira") // adicionando classe ao botao lixeira
const inputOculto = document.createElement("input") // criando o input
inputOculto.classList.add("check-oculto") // adicionando classe ao input
inputOculto.type = "checkbox" // adicionando o atributo type("checkbox")
const spanCustomizado = document.createElement("span") // capturando o span customizado
spanCustomizado.classList.add("check-customizado") // adicionando classe ao span
let spanNewItem = document.createElement("span") // capturando o span do item



const alert = document.getElementById("alert") // capturando o alert de item removido da lista


let item = newItem.value.trim() // capturando o valor sem espaços em branco

/*
newItem.addEventListener("input", (e) => {
  if (item == "") {

  }
  console.log(item)
})
*/

// função para adicionar um item (li) na lista (ul)
function adicionarTarefa() {
  // document.getElementById("").textContent = item
  let novaTarefa = document.createElement("li") // cria o item (li)
  listaTarefas.appendChild(novaTarefa) // adiciona o item na lista
  labels.append(inputOculto, spanCustomizado, spanNewItem)
  novaTarefa.append(labels, butonLixeira) // adiciona o label na lista
  
  
  
  spanCustomizado.textContent = item
  console.log(spanCustomizado)
  
  newItem.value = "" // limpa o input após adicionar algum item.
}