class tarefaModel{

    constructor(tarefa, id, classe){
        

        this._tarefa = tarefa
        this._id = id
        this._classe = classe
    }


    get id(){

        return this._id
    }

    set id(id){
        this._id = id

    }
    get tarefa(){

        return this._tarefa
    }

    get classe(){

        return this._classe
    }

    set classe(classe){

        this._classe = classe
    }
}