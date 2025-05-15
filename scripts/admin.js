
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

const formNoticia = document.getElementById('form-noticia');

formNoticia.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(formNoticia);
  const data = {
    titulo: formData.get('titulo'),
    contenido: formData.get('contenido')
  };

  try {
    const response = await fetch('/noticias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert('Error al publicar noticia: ' + (errorData.error || 'Desconocido'));
      return;
    }

    alert('Noticia publicada con éxito');
    formNoticia.reset();
  } catch (error) {
    alert('Error al publicar noticia: ' + error.message);
  }
});
