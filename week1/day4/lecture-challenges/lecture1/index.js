const input = document.getElementById('lettersOnly');

input.addEventListener('input', () => {
  let value = input.value;
  value = value.replace(/[^a-zA-Z]/g, '');
  input.value = value;
});
