


const form = document.querySelector('#eventForm');
// COLLECTS DATA TO CREATE NEW EVENTACLE

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const urlEncoded = new URLSearchParams(formData).toString();

        fetch("http://localhost:3000/create", {
            method: "POST",
            body: urlEncoded,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            }
        })

    });

