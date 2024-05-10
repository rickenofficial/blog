var isDarkMode = true;

function changeColor() {
    var cuerpo = document.body;
    var boton = document.getElementById('toggleButton');
    
    if (isDarkMode) {
      cuerpo.classList.remove('dark-mode');
      cuerpo.classList.add('light-mode');
      boton.textContent = "🌙 Dark Mode";
    } else {
      cuerpo.classList.remove('light-mode');
      cuerpo.classList.add('dark-mode');
      boton.textContent = "☀️ Light Mode";
    }
    
    isDarkMode = !isDarkMode;
}





