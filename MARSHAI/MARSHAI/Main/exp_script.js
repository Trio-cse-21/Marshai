const form = document.getElementById('upload-form');
const input = document.getElementById('photo-input');
const preview = document.getElementById('preview');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = document.createElement('img');
    img.src = reader.result;
    preview.innerHTML = '';
    preview.appendChild(img);
  };
  reader.readAsDataURL(file);
});