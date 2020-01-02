// Mensaje bienvenida página
    
function llamarAlert() {
    alert("Bienvenido a mi Portfolio!")
}

$("#contenedor").html('index.html');

    
$(document).ready(function(){
    setTimeout(function(){llamarAlert()}, 5000)
        
//    $('#inicio').on('click', function(){
//        $('#contenido').load('../index.html');
//    });
    $('#portfolio').on('click', function(){
        $('#contenido').load('../portfolio.html');
    });
    $('#presupuesto').on('click', function(){
        $('#contenido').load('../presupuesto.html');
    });
    $('#contacto').on('click', function(){
        $('#contenido').load('../contacto.html');
    });
    $('#donde').on('click', function(){
        $('#contenido').load('../dondeEstamos.html');
    });
});