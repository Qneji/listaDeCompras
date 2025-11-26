const newItem = document.getElementById("newItem") // capturando o novo item digitado pelo usuario
const listaTarefas = document.getElementById("list") // capturando a lista (ul)
const alert = document.getElementById("alert") // capturando o alert de item removido da lista
const menssagemFooter = document.getElementById("menssagem")
const imgSpan = document.getElementById("img-span")


// função para adicionar um item (li) na lista (ul)
function adicionarTarefa() {
  let item = newItem.value.trim() // capturando o valor sem espaços em branco
  
  // Garante que não adicionaremos uma tarefa vazia
  if (item === "") {
    menssagemFooter.textContent = "Por favor, insira um item!"
    alert.style.display = "flex"
    alert.style.backgroundColor = "var(--color-danger)"
    imgSpan.src = "./assets/icons/warning-circle-filled.svg"
  } else {
    menssagemFooter.textContent = "Item adicionado com sucesso!"
    alert.style.display = "flex"
    alert.style.backgroundColor = "#004f3b"
    imgSpan.src = "./assets/icons/opcoes.svg"
    imgSpan.style.width = "1.3rem"
    imgSpan.style.height = "1.3rem"
    
    // 1. Criando o li
    let novaTarefa = document.createElement("li") // cria o item (li)
  
    // 2. criando os elementos filhos da li
    const labels = document.createElement("label") // criando o label
    labels.classList.add("checkbox-label") // adicionando classe ao label
  
    const inputOculto = document.createElement("input") // criando o input
    inputOculto.type = "checkbox" // adicionando o atributo type("checkbox")
    inputOculto.classList.add("check-oculto") // adicionando classe ao input
    
    const spanCustomizado = document.createElement("span") // capturando o span customizado
    spanCustomizado.classList.add("check-customizado") // adicionando classe ao span
  
    let spanNewItem = document.createElement("span") // capturando o span do item
    
    const butonLixeira = document.createElement("button") // capturando o botao lixeira
    butonLixeira.classList.add("lixeira") // adicionando classe ao botao lixeira
  
    // 3 montando a estrutura 
    
    // 3.1 adicionando os elementos filhos da label
    labels.append(inputOculto, spanCustomizado, spanNewItem)
  
    // 3.2 adicionando os elementos filhos da li
    novaTarefa.append(labels, butonLixeira) // adiciona o label na lista
  
    // 4 inserção do texto do usuario
    spanNewItem.textContent = item // adicionando o item no span
  
    // 5. Adiciona o LI completo à UL (Lista de Tarefas) 
    listaTarefas.appendChild(novaTarefa) // adiciona o item na lista
  }
    
  // 6. Limpa o input
  newItem.value = "" // limpa o input após adicionar algum item.
}