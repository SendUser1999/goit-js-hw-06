const inputElement = document.getElementById('font-size-control');
const spanElement = document.getElementById('text');

  inputElement.addEventListener('input', function() {
    const fontSize = inputElement.value + 'px';
    spanElement.style.fontSize = fontSize;
  });
console.log(spanElement);
console.log(inputElement);