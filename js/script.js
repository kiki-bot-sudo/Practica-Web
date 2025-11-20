console.log("Sitio cargado correctamente🚀 ");
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("¡Gracias por tu mensaje!");
    });
})
// Cambiar color de fondo al hacer click en botón
document.addEventListener('DOMContentLoaded', function() {
  // Crear botón si no existe
  const btn = document.createElement('button');
  btn.textContent = 'Cambiar color de fondo';
  btn.style.padding = '10px 20px';
  btn.style.marginTop = '20px';
  btn.style.cursor = 'pointer';
  document.body.appendChild(btn);

  // Evento para cambiar color
  btn.addEventListener('click', function() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  });
});

// Validar formulario de contacto
function validarFormulario() {
  const nombre = document.querySelector('input[name="nombre"]');
  const correo = document.querySelector('input[name="correo"]');
  
  if (nombre && nombre.value === '') {
    alert('Por favor, completa el nombre');
    return false;
  }
  
  if (correo && correo.value === '') {
    alert('Por favor, completa el email');
    return false;
  }
  
  alert('¡Formulario enviado exitosamente!');
  return false;
}

// Efecto hover en los enlaces
const enlaces = document.querySelectorAll('a');
enlaces.forEach(enlace => {
  enlace.addEventListener('mouseenter', function() {
    this.style.textDecoration = 'underline';
    this.style.fontWeight = 'bold';
  });
  
  enlace.addEventListener('mouseleave', function() {
    this.style.textDecoration = 'none';
    this.style.fontWeight = 'normal';
  });
});