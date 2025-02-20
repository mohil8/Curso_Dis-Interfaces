$(document).ready(function(){

    // Evento click
    $("#btnClick").on("click", function(){
        alert("¡Clic detectado!");
    });

    // Evento doble clic
    $("#btnDobleClick").on("dblclick", function(){
        alert("¡Doble clic detectado!");
    });

    // Evento mousedown (cuando presionas el mouse)
    $("#hoverBox").on("mousedown", function(){
        $(this).css("background", "red");
    });

    // Evento mouseup (cuando sueltas el mouse)
    $("#hoverBox").on("mouseup", function(){
        $(this).css("background", "lightblue");
    });

    // Evento mouseenter (cuando entras con el cursor)
    $("#hoverBox").on("mouseenter", function(){
        $(this).css("border", "2px solid black");
    });

    // Evento mouseleave (cuando sales con el cursor)
    $("#hoverBox").on("mouseleave", function(){
        $(this).css("border", "none");
    });

    // Evento hover (mouseenter + mouseleave)
    $("#hoverBox").hover(
        function(){ $(this).text("¡Entro!"); },
        function(){ $(this).text("Pasa el mouse"); }
    );

    // Evento keydown (cuando presionas una tecla)
    $("#inputText").on("keydown", function(event){
        console.log("Tecla presionada: " + event.key);
    });

    // Evento keyup (cuando sueltas una tecla)
    $("#inputText").on("keyup", function(){
        console.log("Texto actual: " + $(this).val());
    });

    // Evento change (cuando cambias un valor en un input o select)
    $("#selectBox").on("change", function(){
        alert("Seleccionaste: " + $(this).val());
    });

    // Evento focus (cuando un input recibe el foco)
    $("#inputText").on("focus", function(){
        $(this).css("background", "lightyellow");
    });

    // Evento blur (cuando un input pierde el foco)
    $("#inputText").on("blur", function(){
        $(this).css("background", "white");
    });

    // Evento submit (cuando se envía un formulario)
    $("form").on("submit", function(event){
        event.preventDefault();
        alert("Formulario enviado");
    });

    // Evento scroll (cuando se hace scroll en la página)
    $(window).on("scroll", function(){
        console.log("Estás desplazándote por la página");
    });

    // Evento resize (cuando se cambia el tamaño de la ventana)
    $(window).on("resize", function(){
        console.log("La ventana cambió de tamaño");
    });

    // Evento fadeIn y fadeOut con hover
    $("#hoverBox").hover(
        function(){ $("#fadeBox").stop().fadeIn(500); },
        function(){ $("#fadeBox").stop().fadeOut(500); }
    );

});
