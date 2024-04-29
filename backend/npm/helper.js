
// async function signUp() {

//     let outputPassword = document.querySelector('.form-control'); 
//     let outputFirstName = document.querySelector('.name-control'); 
//     let outputLastName = document.querySelector('.lastName-control'); 
//     let outputEmail = document.querySelector('.email-control'); 
//     // Get the value of the input field 

//     let formData = {
//         passwordInput: outputPassword.value,
//         firstInput: outputFirstName.value,
//         lastInput: outputLastName.value,
//         emailInput: outputEmail.value
//     }
//     // splitForm= formData.split(":");
//     // console.log(splitForm[0]);
//     // console.log(Object.keys(formData).length)
//     console.log(formData);

//     // req.body.appendchild(formData);
     
//     // var myHeaders = new Headers();
//     // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//     // var raw = JSON.stringify({
//     // "email": "dre@test.com"
//     // });

//     var requestOptions = {
//     method: 'POST',
//     // mode: "no-cors",
//     headers: {"Content-Type": "application/x-www-form-urlencoded"},
//     body: JSON.stringify(formData),
//     // redirect: 'follow'
//     };

//     fetch("http://localhost:3000/login", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     // .catch(error => console.log('error', error));

    
//     // console.log(formData.emailInput);

// //    await fetch("http://localhost:3000/login", requestOptions)
// //     .then(response => response.json())
// //     .then(result => console.log(result))
// //     .catch(error => console.log('error', error));

// }






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

