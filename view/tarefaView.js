class tarefaView {

    constructor(elemento){

        this._elemento = elemento
    }

    _template(tarefa){
        return  `${tarefa.lista.map(t =>

                
            `<tr data-linha>
            <td class="${t.classe}"  data-id=${t.id} data-tarefa="tarefa">${t.tarefa}</td><td class="tarefa-texto"><button class="btn btn-success" data-concluir  onclick="controller.concluirTarefa(event)">concluir</button></td><td><button class="btn btn-danger" onclick="controller.excluirTarefa(event)">excluir</button></td>
            </tr>
             `).join('')}
            `       
        }
            
    update(tarefa){

        this._elemento.innerHTML = this._template(tarefa)
    }
}

