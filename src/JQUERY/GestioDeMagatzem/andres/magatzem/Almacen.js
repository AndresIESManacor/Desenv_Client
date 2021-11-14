class Almacen {
    constructor(numero) {
        this.numeroEstanteria = numero;
        this.estanteria = [];
    }

    inicializarAlmacen() {
        for (var i = 0; i < this.numeroEstanteria; i++) {
            this.estanteria[i] = new Estanteria("Estanteria "+i)
        }
    }

    anadirPaquete(paquete, posicion) {
        $("#log").append("<p>Realizando operacion en el Almacen</p>");
        this.estanteria[posicion].anadirPaquete(paquete);
        this.mostrarTabla();
    }

    recogerPaquete(numeroEstanteria){
        $("#log").append("<p>Saliendo del paquete al Almacen ...</p>");
        var paquete = this.estanteria[numeroEstanteria].paquet;
        this.estanteria[numeroEstanteria].recogerPaquete();
        this.mostrarTabla();
        return paquete;
    }

    getNumeroLibres(){
        var index = 0;
        for(var i=0; i<this.estanteria.length; i++){
            if(this.estanteria[i].paquet == null){
                index++;
            }
        }
        return index;
    }

    getNumOcupados(){
        return this.numeroEstanteria - this.getNumeroLibres();
    }

    mostrarTabla(){
        //Copied Paste//

        var oH2 = $("<h2></h2").addClass("text-center").text("MAGATZEM ("+this.getNumLliures()+")");
        var oTABLE = $("<table></table>").addClass("table table-bordered");

        // Crear zona THEAD
        var oTHEAD = $("<thead></thead>").addClass("thead-dark");
        var oTR1   = $("<tr></tr>");
        for(var i=0; i<this.numeroEstanteria; i++){
            var oTH = $("<th></th>").attr("width", "100px").text(i);
            oTR1.append(oTH);
        }
        oTHEAD.append(oTR1);

        // Crear TBODY
        var oTBODY = $("<tbody></tbody>");
        var oTR2   = $("<tr></tr>");
        for(var i=0; i<this.numeroEstanteria; i++){
            var e = this.estanteria[i];
            var oTD = $("<td></td>").attr("width", "100px").html(e.printInfo());
            oTR2.append(oTD);
        }
        oTBODY.append(oTR2);

        // Afegeix a TABLE el THEAD i TBODY
        oTABLE.append(oTHEAD, oTBODY);

        // Afegeix H2 i TABLE a DIV
        $("#content").html("").append(oH2, oTABLE);
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