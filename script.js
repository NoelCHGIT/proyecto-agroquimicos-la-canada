// JavaScript para el menú desplegable
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slide");
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    let currentSlide = 0;
  
    arrowLeft.addEventListener("click", function() {
      if (currentSlide === 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide--;
      }
      updateSlider();
    });
  
    arrowRight.addEventListener("click", function() {
      if (currentSlide === slides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      updateSlider();
    });
  
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    function autoSlide() {
      if (currentSlide === slides.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      updateSlider();
    }
  
    setInterval(autoSlide, 8000); // Cambiar de imagen cada 8 segundos
  });
  


// Página Catalogo
document.addEventListener("DOMContentLoaded", function() {
  // ...

  const indexLinks = document.querySelectorAll(".index-bar a");

  indexLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
          event.preventDefault();

          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          targetElement.scrollIntoView({ behavior: "smooth" });
      });
  });

  // ...
});

// Filtrar productos por letra
function filterByLetter(letter) {
  // Ocultar todos los productos
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
      product.style.display = 'none';
  });

  // Mostrar productos que comienzan con la letra seleccionada
  const filteredProducts = document.querySelectorAll(`[data-letter="${letter}"]`);
  filteredProducts.forEach(product => {
      product.style.display = 'block';
  });
}

// Filtrar productos por marca
function filterByBrand(brand) {
  // Ocultar todos los productos
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
      product.style.display = 'none';
  });

  // Mostrar productos de la marca seleccionada
  const filteredProducts = document.querySelectorAll(`[data-brand="${brand}"]`);
  filteredProducts.forEach(product => {
      product.style.display = 'block';
  });
}

// Evento al hacer clic en una letra del índice alfabético
const indexButtons = document.querySelectorAll('.index-button');
indexButtons.forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const letter = button.innerText;
      filterByLetter(letter);
  });
});

// Evento al hacer clic en una marca del índice por marca
const brandLogos = document.querySelectorAll('.brand-logo');
brandLogos.forEach(logo => {
  logo.addEventListener('click', function(event) {
      event.preventDefault();
      const brand = logo.dataset.brand;
      filterByBrand(brand);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Obtener todas las secciones de productos por letra
  const sectionsByLetter = document.querySelectorAll('section[id^="letter-"]');

  // Obtener todos los botones del índice alfabético
  const indexButtons = document.querySelectorAll('.index-button');

  // Función para ocultar todas las secciones de productos
  function hideAllSections() {
      sectionsByLetter.forEach((section) => {
          section.style.display = "none";
      });
  }

  // Mostrar todos los productos al cargar la página
  hideAllSections();
  document.getElementById('all-products').style.display = 'block';

  // Agregar el evento de clic a cada botón del índice alfabético
  indexButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
          event.preventDefault();

          // Ocultar todas las secciones de productos
          hideAllSections();

          // Obtener el ID de la sección correspondiente al botón clickeado
          const sectionId = button.getAttribute('href');

          // Mostrar la sección correspondiente al botón clickeado
          document.querySelector(sectionId).style.display = 'block';
      });
  });
});




// JavaScript para abrir la imagen grande al hacer clic en el enlace
document.addEventListener("DOMContentLoaded", function() {
  const productImage = document.getElementById("productImage");
  const productImageSection = document.querySelector(".product-image-section");

  productImageSection.addEventListener("click", function() {
    productImageSection.classList.toggle("open");
  });
});











function buscarProducto() {
  const input = document.getElementById('search-input').value.toLowerCase();
  if (input.trim() !== '') {
      const productURL = input.replace(/\s/g, '_').toLowerCase() + '.html';
      verificarExistencia(productURL);
  }
}

function verificarExistencia(productURL) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              window.location.href = productURL;
          } else {
              alert(`El producto no se encuentra en el catálogo.`);
          }
      }
  };
  xhr.open('GET', productURL, true);
  xhr.send();
}

const suggestions = document.getElementById('suggestions').options;
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  const filteredSuggestions = Array.from(suggestions).filter(option =>
      option.value.toLowerCase().startsWith(searchValue)
  );
  const datalist = document.createElement('datalist');
  datalist.id = 'filtered-suggestions';
  filteredSuggestions.forEach(option => datalist.appendChild(option.cloneNode(true)));
  suggestions.parentNode.replaceChild(datalist, suggestions);
  datalist.id = 'suggestions'; // Restaurar el ID original para que el formulario siga funcionando
});