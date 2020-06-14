const botonMario = document.getElementById("boton-mario");
const botonLuigi = document.getElementById("boton-luigi");
const cuadros = document.querySelectorAll('.cuadrito');

// const cuadros2 = document.getElementsByClassName("cuadrito"); Sirve para ver caracteristicas de HTML

botonMario.onclick = () => {
  cuadros.forEach(cuadro => {
    cuadro.classList.remove("green-color");
    cuadro.classList.add("red-color");
  })
}

botonLuigi.onclick = () => {
  cuadros.forEach(cuadro => {
    cuadro.classList.remove("red-color");
    cuadro.classList.add("green-color");
  })
}