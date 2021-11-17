
class Paquete {

    // COMPLETADO
    constructor(id, destinatario, peso){
        this.id = id;
        this.destinatario = destinatario;
        this.peso = peso;
    }

    // COMPLETADO
    getInfo(){
        return this.id+"<br/>"+this.destinatario+"<br/>"+this.peso+"Kg";
    }

}