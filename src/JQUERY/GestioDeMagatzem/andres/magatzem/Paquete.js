
class Paquete {

    // COMPLETADO
    constructor(id, destinatario, peso){
        this.id = id;
        this.destinatario = destinatario;
        this.peso = peso;
    }

    setDescrition(descripcion){
        this.destinatario = descripcion;
    }

    setPeso(peso) {
        this.peso = peso;
    }

    // COMPLETADO
    getInfo(){
        return "<br>"+this.id+"<br/>"+this.destinatario+"<br/>"+this.peso+"Kg<br>";
    }

}