
async function signUp() {
     
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": "dre@test.com"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // let outputPassword = document.querySelector('.form-control'); 
    // let outputFirstName = document.querySelector('.name-control'); 
    // let outputLastName = document.querySelector('.lastName-control'); 
    // let outputEmail = document.querySelector('.email-control'); 
    // Get the value of the input field 

    // let formData = {
    //     passwordInput: outputPassword.value,
    //     firstInput: outputFirstName.value,
    //     lastInput: outputLastName.value,
    //     emailInput: outputEmail.value
    // }
    // console.log(formData);
    // console.log(formData.emailInput);




//    await fetch("http://localhost:3000/login", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

    
    
}