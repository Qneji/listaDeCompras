const newItem = document.getElementById("newItem") // capturando o novo item digitado pelo usuario
const alert = document.getElementById("alert") // capturando o alert de item removido da lista
const menssagemFooter = document.getElementById("menssagem")
const imgSpan = document.getElementById("img-span")

let ListaMercado = ["Pão de forma", "Café preto", "Suco de laranja", "Bolacha"]

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

    ListaMercado.push(item)
    renderizarTarefas()
  }
    
  // 6. Limpa o input
  newItem.value = "" // limpa o input após adicionar algum item.
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("list")
  listaTarefas.innerHTML = "";


  for (i = 0; i < ListaMercado.length; i++) {
    
    let novaTarefa = document.createElement("li")
    const labels = document.createElement("label")
    labels.classList.add("checkbox-label")
    const inputOculto = document.createElement("input")
    inputOculto.type = "checkbox"
    inputOculto.classList.add("check-oculto")
    const spanCustomizado = document.createElement("span")
    spanCustomizado.classList.add("check-customizado")
    let spanNewItem = document.createElement("span")
    const butonLixeira = document.createElement("button")
    butonLixeira.classList.add("lixeira")
    labels.append(inputOculto, spanCustomizado, spanNewItem)
    novaTarefa.append(labels, butonLixeira)
    spanNewItem.textContent = ListaMercado[i] // adicionando o item na lista
    listaTarefas.appendChild(novaTarefa)
  }
}

renderizarTarefas() // chamando a função para renderizar as tarefas