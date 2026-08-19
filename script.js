
const estudiantes = [];

const form = document.getElementById('form-estudiante');
const lista = document.getElementById('lista');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const carne = document.getElementById('carne').value.trim();
  const nombre = document.getElementById('nombre').value.trim();
  const fecha = document.getElementById('fecha').value;

  
  if (carne === '' || nombre === '' || fecha === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }

  if (isNaN(carne)) {
    alert('El carné debe contener solo números.');
    return;
  }

  
  estudiantes.push({ carne, nombre, fecha });

  
  const li = document.createElement('li');
  li.textContent = `${carne} - ${nombre} - ${fecha}`;
  lista.appendChild(li);

  form.reset();
});