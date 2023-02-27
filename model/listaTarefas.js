class listaTarefas{

    constructor(lista){

        this._lista = []
    }

    adicionaTarefa(tarefa){

        this._lista.push(tarefa)


    }


    get lista(){

        return this._lista
    }

}