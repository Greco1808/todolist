class cronometroController{

    constructor(hora,minuto,segundo,milisegundo){

        this._hora = hora;
        this._minuto = minuto;
        this._segundo = segundo;
        this._milisegundo = milisegundo;

    }

    pause(){

        clearInterval(this.cron);


    }

    

    

    

  timer(){

            if ((this._milisegundo += 10) == 1000) {
              this._milisegundo = 0;
              this._segundo++;
            }
            if (this._segundo == 60) {
              this._segundo = 0;
              this._minuto++;
            }
            if (this._minuto == 60) {
              this._minuto = 0;
              this._hora++;
            }
            document.getElementById('hour').innerText = this.returnData(this._hora);
            document.getElementById('minute').innerText = this.returnData(this._minuto);
            document.getElementById('second').innerText = this.returnData(this._segundo);
            document.getElementById('millisecond').innerText = this.returnData(this._milisegundo);
          
          
          
    }

    returnData(input) {
        return input > 10 ? input : `0${input}`
      }

      start(){
        
        this.pause();
        this.cron = setInterval(() => { this.timer(); }, 10);
        

    }

    reset(){
        this.pause()
        this._hora = 0;
        this._minuto = 0
        this._segundo = 0;
        this._milisegundo = 0;
        

    }

    
}