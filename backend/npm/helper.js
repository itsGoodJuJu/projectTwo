
async function signUp() {
    let outputPassword = document.querySelector('.form-control'); 
    let outputFirstName = document.querySelector('.name-control'); 
    let outputLastName = document.querySelector('.lastName-control'); 
    let outputEmail = document.querySelector('.email-control'); 
    // Get the value of the input field 

    let formData = {
        passwordInput: outputPassword.value,
        firstInput: outputFirstName.value,
        lastInput: outputLastName.value,
        emailInput: outputEmail.value
    }
    console.log(formData);

    //e.preventDefault();

    // let newUser = await db.many('INSERT INTO loginInfo (email, password, firstName, lastName) VALUES ($1, $2, $3, $4) RETURNING *', [formData.emailInput, formData.passwordInput, formData.firstInput, formData.lastInput]); 
    // console.log(newUser);



    // await fetch('http://localhost:3000/login', {
    //     Method: 'POST',
    //     Headers: {
    //       Accept: 'application.json',
    //       'Content-Type': 'application/json'
    //     },
    //     Body: formData,
    //     Cache: 'default'
    //   })
    //   .then((response) => response.json())

    //   .then((data) => console.log(data));


  const requestOptions = {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
} 

    await fetch("http://localhost:3000/login" , requestOptions);

   
    
}