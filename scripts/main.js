document.addEventListener("DOMContentLoaded", () => {
    const catalogoDiv = document.getElementById("catalogo");
    const noticiasDiv = document.getElementById("noticias");
  
    // Cargar catálogo si existe el div
    if (catalogoDiv) {
      fetch("/catalogo")
        .then(res => res.json())
        .then(data => {
          catalogoDiv.innerHTML = data.map(item => `
            <div class="card">
              <h3>${item.titulo}</h3>
              <img src="${item.imagen}" alt="${item.titulo}" />
              ${item.video ? `<iframe src="${item.video}" frameborder="0" allowfullscreen></iframe>` : ""}
            </div>
          `).join('');
        });
    }
  
    // Cargar noticias si existe el div
    if (noticiasDiv) {
      fetch("/noticias")
        .then(res => res.json())
        .then(data => {
          noticiasDiv.innerHTML = data.map(item => `
            <div class="card">
              <h3>${item.titulo}</h3>
              <p>${item.contenido}</p>
            </div>
          `).join('');
        });
    }
  });