//função para acessar o valor do input

const botaoInserir = document.querySelector("[data-form-button]")

function InserirTabela(){
  
  botaoInserir.addEventListener("click", function(){
    
    const entrada = document.querySelector("[data-form-input]")
    const valorInput = entrada.value;
    
    const tabela = document.querySelector("[data-tabela]")
    const coluna = document.createElement("tr")
    const novaTabela = tabela.appendChild(coluna)
    
    const linhaTarefa = document.createElement("td")
    const linhaConcluir = document.createElement("td")
    const linhaExcluir = document.createElement("td")  
   
   coluna.appendChild(linhaTarefa)
   coluna.appendChild(linhaConcluir)
   coluna.appendChild(linhaExcluir)
    
   linhaTarefa.innerHTML = valorInput;
   linhaConcluir.appendChild(botaoConcluir());
   linhaExcluir.appendChild(botaoExcluir());
    
    entrada.value = ""
  
   
    
    
  })
  
}

const botaoConcluir = () => {
  
  const botaoConcluir = document.createElement("button")
  botaoConcluir.innerText = "concluir"
  botaoConcluir.classList.add("button-lista")
  
  botaoConcluir.addEventListener("click", concluirTarefa)
  
  return botaoConcluir
}


const concluirTarefa =  (evento) =>{
  
  const botaoConcluir = evento.target; 
  const tabela = botaoConcluir.parentElement.parentElement.firstChild
  
  tabela.classList.toggle("concluir")
  
  
 
}

const botaoExcluir = () => {
  
  const botaoExcluir = document.createElement("button")
  botaoExcluir.innerText = "excluir"
  botaoExcluir.classList.add("button-lista")
  
  botaoExcluir.addEventListener("click", tirarDaLista)
  
  return botaoExcluir
}

const tirarDaLista = (evento) => {
  
  const botaoExcluir = evento.target;
  
  const tiraDaLista = botaoExcluir.parentElement.parentElement;
  
  tiraDaLista.remove();
  
}







InserirTabela();