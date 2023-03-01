class tarefaController {

    constructor(){

        let $ = document.querySelector.bind(document)

        this.tarefa = document.querySelector(".form-input")
        this.tarefaIncluida = new tarefaView($(".tabela"))
        this.canvas = ($("#myChart"))
        this.chart = new chartController
        this.chart.insereChart(this.canvas)
        this.listaTarefas = new listaTarefas
        this.id = -1;
        this.eventoLista()
        this.tarefaConcluida = document.getElementsByClassName("concluir")
        this.tarefaPendente = document.getElementsByClassName("pendente")
        
        
        
        
        
    }

eventoLista(){

    document.addEventListener('DOMContentLoaded', async () =>{

      const { value: text } = await Swal.fire({
input: 'text',
inputLabel: 'seja bem-vindo ! vamos começar escolhendo um nome para sua lista',
inputPlaceholder: 'Digite o nome da sua lista aqui',
inputAttributes: {
'aria-label': 'Type your message here'
},
showCancelButton: true
})

if (text) {
document.querySelector('.title').innerHTML = text
}

const { value: fruit } = await Swal.fire({
    title: 'Agora vamos escolher uma cor de fundo para sua lista.',
    inputPlaceholder: 'Selecione uma cor',
    input: 'select',
    inputOptions: {
      'cores': {
        '#0d6efd': 'azul' ,
        '#6610f2' : 'indigo',
        '#6f42c1' : 'purple', 
        '#d63384' : 'pink:',
        '#dc3545' : 'vermelho',
        '#fd7e14' : 'laranja',
        '#ffc107' : 'amarelo',
         '#198754' : 'verde',
         '#20c997' : 'teal:',
         '#0dcaf0' : 'ciano'
        
      },
    }
    })

      if (fruit) {
        let corpoLista = document.querySelector('.body')
        corpoLista.style.backgroundColor = fruit
        
      }

  

   })
}


    
    


    geraId(){


       
        
        
        return this.id += 1

        

    }


    insereTarefa(){
        
        //cria uma nova tarefa e um Id para essa tarefa, depois insere esses dois valores em uma lista de tarefas
        this.listaTarefas.adicionaTarefa(this.criaTarefa())
        //insere cada tarefa dessa lista dentro do template HTML , gerado pela View
        this.tarefaIncluida.update(this.listaTarefas)
        //inicializa o gráfico adicionando tarefas pendentes
        this.chart.adicionarTarefasGrafico(this.tarefaPendente.length)
        this.tarefa.value = ""
        this.tarefa.focus()
        console.log(this.tarefaPendente.length)
        console.log(this.listaTarefas._lista)
        
        
        
        
        
        
    }

  

    criaTarefa(){
        
        return new tarefaModel(
            //valor do input
            this.tarefa.value,
            this.geraId(),
            this.classe = "pendente"
            
            
        )
            
    }



    concluirTarefa(event){

        let tarefaConcluida = event.target.parentElement.previousSibling
        const idTarefa = event.target.parentElement.previousSibling.getAttribute('data-id')
        
        tarefaConcluida.classList.toggle("concluir")
        tarefaConcluida.classList.remove("pendente")
        

        if(tarefaConcluida.className === "concluir"){   
            this.listaTarefas._lista[idTarefa]._classe = "concluir"
            
            this.chart.concluirTarefaGrafico(this.tarefaConcluida.length)
        }else {
            this.listaTarefas._lista[idTarefa]._classe = "pendente"
            tarefaConcluida.classList.add("pendente")
            this.chart.rollBackConcluir()
        }
        
        
        
        
        
    }

    

    excluirTarefa(event){
        const tarefaExcluir = event.target.parentElement.parentElement;
        const tarefaConcluida = event.target.parentElement.previousSibling.previousSibling
        const idTarefa = event.target.parentElement.previousSibling.previousSibling.getAttribute('data-id');
        const mudaId = document.querySelectorAll("[data-tarefa]")
        var i;
        

        this.listaTarefas._lista.splice(idTarefa, 1)
        tarefaExcluir.remove()
        
        for(i = idTarefa; i < this.listaTarefas._lista.length +1 ; i++){
            
            var valorId = mudaId[i].getAttribute('data-id') -1
            mudaId[i].setAttribute('data-id', valorId.toString())
            
        }

        for(i = idTarefa; i < this.listaTarefas._lista.length ; i++){
            this.listaTarefas._lista[i].id -=1
        }
        
        this.id = this.listaTarefas._lista.length -1;
        if(tarefaConcluida.className != "concluir"){

            this.chart.excluirTarefaGrafico(0)

        }else{
            this.chart.excluirTarefaGrafico(1)
        }

        

    }

}
