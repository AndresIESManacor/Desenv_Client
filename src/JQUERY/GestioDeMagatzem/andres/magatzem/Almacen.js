class Almacen {
    //COMPLETADO
    constructor(numero) {
        this.numeroEstanteria = numero;
        this.estanteria = [];
    }

    //COMPLETADO
    inicializarAlmacen() {
        for (var i = 0; i < this.numeroEstanteria; i++) {
            this.estanteria[i] = new Estanteria("Estanteria "+i)
        }
    }

    //COMPLETADO
    anadirPaqueteConPasicion(paquete, posicion) {
        if (paquete.codigo==null || paquete.codigo === "") {
            paquete.setCodigo("00000");
        }
        if (paquete.peso==null || paquete.peso === "") {
            paquete.setPeso("0");
        }
        this.estanteria[posicion].anadirPaquete(paquete);
        $("#log").append("<p>Operacion realizada</p>");
        this.mostrarArray();
    }

    // COMPLETADO
    recogerPaquete(numeroEstanteria){
        var paquete = this.estanteria[numeroEstanteria].paquete;
        this.estanteria[numeroEstanteria].eliminarPaquete();
        this.mostrarArray();
        return paquete;
    }

    //COMPLETADO
    getNumeroLibres(){
        var index = 0;
        for(var i=0; i<this.estanteria.length; i++){
            if(this.estanteria[i].paquete == null){
                index++;
            }
        }
        return index;
    }

    //COMPLETADO
    getNumOcupados(){
        return this.numeroEstanteria - this.getNumeroLibres();
    }

    //COMPLETADO
    mostrarArray(){

        //Principio de la tabla
        var table = $("<table></table>");
        var head = $("<thead></thead>");
        var tr = $("<tr></tr>");

        for(var x=0; x<this.numeroEstanteria; x++){
            var th = $("<th></th>");
            tr.append(th);
        }
        head.append(tr);

        var body = $("<tbody></tbody>");
        var tr2   = $("<tr></tr>");

        for(var y=0; y<this.numeroEstanteria; y++){
            var estanteriaElement = this.estanteria[y];
            var td = $("<td></td>").html(estanteriaElement.printInfo());
            tr2.append(td);
        }
        body.append(tr2);

        table.append(head,body);

        this.inizialitzeNumberMagatzem();
        $("#tableShow").html("").append(table);
    }
    // COMPLETADO
    inizialitzeNumberMagatzem() {
        $("#number").text("("+this.getNumeroLibres()+")");
    }

    // COMPLETADO
    calcularPrecio(){
        var text = "";
        for (var i = 0; i < this.estanteria.length; i++) {
            if(this.estanteria[i].paquete != null){
                text += "<p>Precio del paquete del "+i+" es "+(parseFloat(this.estanteria[i].paquete.peso) * 0.75)+"$</p>";
            }
        }
        $("#log").html(text);
    }

    // COMPLETADO
    ordenarPorPeso() {
        this.estanteria.sort(function (a, b){
            var aPaquete = a;
            var bPaquete = b;

            if (bPaquete.paquete == null && aPaquete.paquete == null) {
                return 1;
            }
            if (bPaquete.paquete == null) {
                return -1;
            }
            if (aPaquete.paquete == null) {
                return 1;
            }
            return aPaquete.paquete.peso - bPaquete.paquete.peso;
        });
        this.mostrarArray();
    }

    // COMPLETADO
    resetOrdenar() {
        this.estanteria.sort( (a,b) => a.identificador.localeCompare(b.identificador));
        this.mostrarArray();
    }

    // COMPLETADO
    paqueteMasViejo(){
        this.estanteria.sort(function (a, b){
            var aPaquete = a;
            var bPaquete = b;

            if (bPaquete.entrada == null && aPaquete.entrada == null) {
                return 1;
            }
            if (bPaquete.entrada == null) {
                return -1;
            }
            if (aPaquete.entrada == null) {
                return 1;
            }
            return aPaquete.entrada - bPaquete.entrada;
        });
        this.mostrarArray();
    }
}