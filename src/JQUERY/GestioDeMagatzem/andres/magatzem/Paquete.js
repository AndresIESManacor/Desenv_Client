
class Paquete {

    // COMPLETADO
    constructor(codigo, destinatario, peso){
        this.codigo = codigo;
        this.destinatario = destinatario;
        this.peso = peso;
    }

    // COMPLETADO
    setCodigo(codigo) {
        this.codigo = codigo;
    }

    // COMPLETADO
    setPeso(peso) {
        this.peso = peso;
    }

    // COMPLETADO
    getInfo(){
        return "<br>"+this.codigo+"<br/>"+this.destinatario+"<br/>"+this.peso+"Kg<br>";
    }

}