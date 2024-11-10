// Crear un div para mostrar el tamaño de pantalla
const screenSizeDiv = document.createElement("div");
document.body.appendChild(screenSizeDiv);

function updateScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  screenSizeDiv.textContent = `Ancho: ${width}px, Alto: ${height}px`;
}

// Actualiza el tamaño al cargar la página y cada vez que se redimensiona la ventana
window.addEventListener("load", updateScreenSize);
window.addEventListener("resize", updateScreenSize);