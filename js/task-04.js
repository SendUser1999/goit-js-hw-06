const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let value = 0;

decrementButton.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
});
console.log("Поточне значення лічильника:", counterValue);
incrementButton.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
});
console.log("Поточне значення лічильника:", counterValue);