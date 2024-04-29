const signUpForm = document.querySelector('#signUpForm');

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(signUpForm);

        const urlEncoded = new URLSearchParams(formData).toString();

        fetch("http://localhost:3000/signup", {
            method: "POST",
            body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        })

        
    });