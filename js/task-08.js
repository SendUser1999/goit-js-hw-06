
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(loginForm); 
    const dataObject = {}; 
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    if (!dataObject.email || !dataObject.password) {
        alert ('Всі поля повинні бути заповнені'); 
    } else {
        console.log(dataObject); 
        loginForm.reset(); 
    }
});
