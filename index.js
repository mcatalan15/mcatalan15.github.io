<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selector de Participantes</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
  </style>
</head>
<body>

  <h1>Selector de Participantes</h1>

  <form id="formParticipante">
    <label for="nombre">Nombre del participante:</label>
    <input type="text" id="nombre" placeholder="Ingrese un nombre" required>
    <button type="button" onclick="seleccionarParticipante()">Seleccionar Participante</button>
  </form>

  <h2>Lista de Nombres</h2>
  <ul id="listaNombres">
    <li>Nombre1</li>
    <li>Nombre2</li>
    <li>Nombre3</li>
    <!-- Agrega más nombres según sea necesario -->
  </ul>

  <script>
    let participantes = Array.from(document.getElementById('listaNombres').children);

    function seleccionarParticipante() {
      const inputNombre = document.getElementById('nombre');
      const nombreParticipante = inputNombre.value.trim();

      if (nombreParticipante !== '') {
        if (participantes.length > 0) {
          const indice = Math.floor(Math.random() * participantes.length);
          const participanteSeleccionado = participantes.splice(indice, 1)[0];
          
          alert(`El participante seleccionado es: ${nombreParticipante} - ${participanteSeleccionado.innerText}`);
          
          inputNombre.value = '';
        } else {
          alert('Todos los participantes han sido seleccionados.');
        }
      } else {
        alert('Por favor, ingrese un nombre de participante.');
      }
    }
  </script>

</body>
</html>

