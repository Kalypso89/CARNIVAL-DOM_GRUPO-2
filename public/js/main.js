/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>titulo</title>

  <style>
    p{
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      font-size: 250px;
      color: rgb(31, 217, 241);
      display: flex;
      justify-content: center;
    }
  </style>

</head>
<body>
  <button id="btn-iniciar">INICIAR</button>
  <button id="btn-detener">DETENER</button>

  <p id='parrafo'></p>
  <script>
    var contador = 30;

    function escribe(){
      contador--,
      document.getElementById('parrafo').innerHTML = contador;
    }

    var intervalo;

    document.getElementById('btn-iniciar').addEventListener('click',function(){intervalo = setInterval(escribe, 1000)});

    document.getElementById('btn-detener').addEventListener('click',function(){clearInterval(intervalo)});

  </script>

  
</body>
</html>
*/