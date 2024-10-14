document.addEventListener("click", (event) => {
  const menu = document.getElementById("menu");
  const check = document.getElementById("check");

  //solo si el check box esta check
  if (check.onchecked) {
    // Si el clic no fue dentro del menú ni dentro del botón, se cierra el menú
    if (!menu.contains(event.target)) {
      menu.style.transform = "translateY(26%) translateX(100%)"; // Agrega la clase que esconde el menú
    }
  }
});
