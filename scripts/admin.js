document.addEventListener("DOMContentLoaded", () => {
  const formCatalogo = document.getElementById("form-catalogo");
  const formNoticia = document.getElementById("form-noticia");

  formCatalogo.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      titulo: formCatalogo.titulo.value,
      imagen: formCatalogo.imagen.value,
      video: formCatalogo.video.value
    };
    await fetch("/catalogo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alert("Auto agregado al catálogo.");
    formCatalogo.reset();
  });

  formNoticia.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      titulo: formNoticia.titulo.value,
      contenido: formNoticia.contenido.value
    };
    await fetch("/noticias", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    alert("Noticia publicada.");
    formNoticia.reset();
  });
});