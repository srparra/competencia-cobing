const toggleButton = document.getElementById('toggleButton');
const texto = document.getElementById('texto');
let isVisible = false;  // Variable para controlar si el texto está visible o no

toggleButton.addEventListener('click', () => {
    if (isVisible) {
        texto.classList.remove('visible'); // Si el texto está visible, lo ocultamos
        texto.classList.add('invisible'); // Añadimos la clase invisible
    } else {
        texto.classList.add('visible'); // Si el texto está oculto, lo mostramos
        texto.classList.remove('invisible'); // Eliminamos la clase invisible
    }
    isVisible = !isVisible;  // Cambiamos el estado para la próxima vez que se haga clic
});
