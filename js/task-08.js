
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefaut();

    const formData = new FormData(loginForm); 
    const dataObject = {}; 
    formData.forEach((value, key) => {
        dataObject[key] = value;
    });
    if (!dataObject.email || !dataObject.password) {
        alert; 
    } else {
        console.log(dataObject); 
        loginForm.reset(); 
    }
});
