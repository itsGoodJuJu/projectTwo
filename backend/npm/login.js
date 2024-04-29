
// async function logIn() {
//     const loginEmail = document.querySelector('#loginEmail');
//     console.log(loginEmail.value);
// }


const loginForm = document.querySelector('#loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(loginForm);
        const loginEmail = document.querySelector('#loginEmail');
        console.log(loginEmail.value);

        const urlEncoded = new URLSearchParams(formData).toString();

        fetch("http://localhost:3000/login", {
            method: "GET",
            // body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        })

        
        window.location.href = 'file:///Users/corcoding/digitalcrafts/projectTwo/backend/npm/index.html?eventName=g&eventLocation=g&eventDateTime=4232-02-05&eventDateTime=00%3A00%3A00&eventDescription=fess#';
    });