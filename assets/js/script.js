$(document).ready(function() {

    // Variable para rastrear si el correo ya fue enviado
    var correoEnviado = false;

    $("#enviarCorreo").click(function() {

        // Verificar si el correo ya fue enviado
        if (!correoEnviado) {
            alert("El correo fue enviado correctamente...");
            correoEnviado = true; // Actualizar el estado del correo enviado
            $(this).html("Correo Enviado");
        } else {
            alert("El correo ya fue enviado.");
        }

    });




    // Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
          event.preventDefault();
          $('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000); // Duración de la animación en milisegundos
        }
      });

  });