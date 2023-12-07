//Agrega a la pantalla el valor del botón de la calculadora
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}

//Vacía la pantalla
function borrar() {
  document.getElementById("pantalla").value = " ";
}

//Toma el valor de la pantalla y ejecuta los cálculos.
function calcular() {
  const valorPantalla = document.getElementById("pantalla").value;
  const resultado = eval(valorPantalla); // Eval recibe un string y devuelve el resultado de la operación matemática contenida en dicho string.
  if (resultado) {
    document.getElementById("pantalla").value = resultado;
  } else {
    document.getElementById("pantalla").value = " ";
  }
}
