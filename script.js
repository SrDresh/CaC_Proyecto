console.log("No funciona")
document.addEventListener("DOMContentLoaded", function () {
    var headerContent = (`
    <header>
    <nav class="navbar">
      <div class="logo">
        <img src="logo.png" alt="Logo">
      </div>
      <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#"></a></li>
      </ul>
      <div class="dropdown">
        <button onclick="toggleDropdown()" class="dropbtn"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg></button>
          <div id="myDropdown" class="dropdown-content">
          <ul>
            <li>
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg> Perfil</a></li>
              <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi-cart2" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>  Carrito </a></li>
              <li><a href="#"><i class="material-icons">shopping_cart</i> Productos</a></li>
              <li><a href="#"><i class="material-icons">build</i> Servicios</a></li>
              <li><a href="#"><i class="material-icons">mail</i> Contacto</a></li>
              <li><a href="#"><span class="material-symbols-outlined">
              logout
              </span></a></li>
          </ul>
      </div>
    </div>
    </nav>
    </header>`)

    document.body.insertAdjacentHTML('afterbegin', headerContent);
});

document.write(`<footer>
<div>
  <a href="" class="footer-links">Soporte</a>
  <a href=""class="footer-links">Nosotros</a>
  <a href=""class="footer-links">Contacto</a>
  <a href=""class="footer-links"></a>
</div>
</footer>`)

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    var rect = dropdown.getBoundingClientRect();
    var rightSpace = window.innerWidth - rect.right;

    if (rightSpace < rect.width) {
        dropdown.classList.add("left");
    } else {
        dropdown.classList.remove("left");
    }

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
