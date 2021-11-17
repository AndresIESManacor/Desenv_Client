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
        this.estanteria[posicion].anadirPaquete(paquete);
        $("#log").append("<p>Operacion realizada</p>");
        this.mostrarArray();
    }

    recogerPaquete(numeroEstanteria){
        $("#log").append("<p>Saliendo del paquete al Almacen ...</p>");
        var paquete = this.estanteria[numeroEstanteria].paquete;
        this.estanteria[numeroEstanteria].recogerPaquete();
        this.mostrarArray();
        return paquete;
    }

    //COMPLETADO
    getNumeroLibres(){
        var index = 0;
        for(var i=0; i<this.estanteria.length; i++){
            if(this.estanteria[i].paquete == null){
                index++;
                console.log(index);
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

        for(var i=0; i<this.numeroEstanteria; i++){
            var oTH = $("<th></th>");
            tr.append(oTH);
        }
        head.append(tr);

        var body = $("<tbody></tbody>");
        var tr2   = $("<tr></tr>");

        for(var i=0; i<this.numeroEstanteria; i++){
            var estanteriaElement = this.estanteria[i];
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


    calcularPrecios(){
        $("#log").append($("<p></p>").text("Calculant preus al Magatzem ..."));
        this.estanteria.forEach(calcularPrecioPaquete());
    }

    calcularPrecioPaquete(item, index, array){
        if(item.paquet!=null){
            var pvp = parseFloat(item.paquet.pes) * 0.75;
            $("#log").append($("<p></p>").text("Preu paquet "+index+" és "+pvp+"€."));
        }
    }

    ordenarPorPeso(){
        $("#log").append($("<p></p>").text("Ordenant paquets al Magatzem ..."));
        this.estanteria.sort(function(a, b){
            var pesA = (a.paquet != null)? a.paquet.pes : 0;
            var pesB = (b.paquet != null)? b.paquet.pes : 0;
            return pesA - pesB;
        });
    }

    paqueteMasViejo(){
        $("#log").append($("<p></p>").text("Cercant el paquet més vell al Magatzem ..."));
        var minTemps =  new Date();
        var pMesVell = null;
        for(var i=0; i<this.numeroEstanteria; i++){
            if(this.estanteria[i].paquet!=null){
                var p = this.estanteria[i].paquet;
                if(this.estanteria[i].entrada < minTemps){
                    pMesVell = p;
                    minTemps = p.entrada;
                }
            }
        }
        return pMesVell;
    }
}