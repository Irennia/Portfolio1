//function calculo(){
//    
//    var presuTotal = 0;
//    var nombre = document.getElementById("nombre").value
//    
//    $("#presupuesto").val("#nombre").show
//   //alert(nombre);
//}

//$(document).ready(function () {
//    $("#nombre").keyup(function () {
//        var value = $(this).val();
//        $("#presupuesto").val(value);
//    });
//});

var totalTipoWeb = 0;
var descuentoPlazos= 0;
var total = 0;
var sumatotal = 0;

$(document).ready(function () {  
    
    $("#tipoWeb").change(function (e) {
            $('#tipoWeb').each(function(){
                var precio = $(this).val();
                var valor = $("#tipoWeb").val();
                 if (precio == "40")
                  totalTipoWeb += parseInt(valor);
                 if (precio == "50")
                  totalTipoWeb += parseInt(valor);
                 if (precio == "60")
                  totalTipoWeb += parseInt(valor);

                $("#web").val(totalTipoWeb);
            })
        })

        $("#plazos").change(function (e) {
                $('#plazos').each(function(){
                    var descuento = $(this).val();
                    var valor = $("#web").val();
                     if (descuento == "0.05")
                      descuentoPlazos = valor / 1.05;
                     if (descuento == "0.10")
                      descuentoPlazos = valor / 1.10;
                     if (descuento == "0.15")
                      descuentoPlazos = valor / 1.15;
                    if (descuento == "0.20")
                      descuentoPlazos = valor / 1.20;
            
                    $("#plazosTotal").val(descuentoPlazos);

                })
        })    
});

//Suma al marcar y resta al desmarcar las secciones y sumamos con el resultado del descuento

    function sumar(valor) {
        total += valor;
        document.formulario.seccionesTotal.value = total;
        
        totalT = total + descuentoPlazos;
        
        //alert(totalT);
        
        $("#prepTotal").val(totalT);
    }

    function restar(valor) { 
        total -= valor;  
        document.formulario.seccionesTotal.value = total;
        
        totalT = total + descuentoPlazos;
        
        $("#prepTotal").val(totalT);
    }

    
  
        
    