
// Agregar al catálogo
document.getElementById('form-catalogo').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const data = {
    titulo: form.titulo.value,
    imagen: form.imagen.value,
    video: form.video.value || null,
  };

  fetch('/catalogo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) {
      alert("Auto agregado al catálogo");
      form.reset();
    } else {
      alert("Error al guardar auto");
    }
  });
});

// Agregar noticia
document.getElementById('form-noticia').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const data = {
    titulo: form.titulo.value,
    contenido: form.content.value || form.contenido.value // por si cambia nombre
  };

  fetch('/noticias', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) {
      alert("Noticia publicada");
      form.reset();
    } else {
      alert("Error al publicar noticia");
    }
  });
});
