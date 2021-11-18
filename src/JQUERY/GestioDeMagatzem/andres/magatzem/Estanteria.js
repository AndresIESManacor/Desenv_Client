class Estanteria {
    // COMPLETADO
    constructor(id) {
        this.identificador = id;
        this.paquete = null;
        this.entrada = null;
        this.salida = null;
    }

    // COMPLETADO
    anadirPaquete(paquete){
        this.paquete = paquete;
        this.entrada = new Date();
    }

    // COMPLETADO
    eliminarPaquete(){
        this.paquete = null;
        this.sortida = null;
    }
    printInfo(){

        var paquetInfo ="";
        if(this.paquete != null){
            paquetInfo += this.paquete.getInfo() + "<br/>";
            paquetInfo += this.formatEntrada() + "<br/>";
        }
        else if(this.sortida!= null){
            paquetInfo += "Sense paquete <br/>";
            paquetInfo += this.formatSortida() + "<br/>";
        }
        else {
            paquetInfo += "Sense paquet";
        }

        return "<b>"+ this.identificador + "</b><br/>"+ paquetInfo;
    }

    formatEntrada(){
        return this.formataData(this.entrada);
    }

    formatSortida(){
        return this.formataData(this.sortida);
    }

    formataData(d){
        return d.getHours() + ":"+
            d.getMinutes() + ":"+
            d.getSeconds();
    }
}