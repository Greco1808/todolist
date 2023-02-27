class chartController{

constructor(context){

  this.context = context
  
  
  
}


 
insereChart(context){
  this.chart = new Chart(context, {
    type: 'doughnut',
    data: {
      labels: ['Tarefas concluídas', 'tarefas pendentes'],
      datasets: [{
        label: '# of Votes',
        data: [0,0],
        borderWidth: 1
      }]
    }
    }

      
  
  
  )
  console.log(this.chart.data.datasets[0].data[0])
}

adicionarTarefasGrafico(valor){

  this.chart.data.datasets[0].data[0] = valor
  this.chart.update()
  
  console.log(this.chart.data.datasets[0].data[0])
  console.log(this.chart.data.datasets[0].data[1])
  
}

concluirTarefaGrafico(valor){

  this.chart.data.datasets[0].data[1] = valor
  this.chart.data.datasets[0].data[0] -= 1
  
  this.chart.update()

  
  console.log(this.chart.data.datasets[0].data[0])
  console.log(this.chart.data.datasets[0].data[1])

}

rollBackConcluir(){

  this.chart.data.datasets[0].data[0] += 1
  this.chart.data.datasets[0].data[1] -=1
  this.chart.update()

  
  console.log(this.chart.data.datasets[0].data[0])
  console.log(this.chart.data.datasets[0].data[1])
}

excluirTarefaGrafico(x){

  this.chart.data.datasets[0].data[x] -= 1;
  this.chart.update()

  
  console.log(this.chart.data.datasets[0].data[0])
  console.log(this.chart.data.datasets[0].data[1])

}


}

  





