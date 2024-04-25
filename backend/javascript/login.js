
// async function signUp() {
//     console.log('clicked')
//     let outputPassword = document.querySelector('.form-control'); 
//     let outputFirstName = document.querySelector('.name-control'); 
//     let outputLastName = document.querySelector('.lastName-control'); 
//     let outputEmail = document.querySelector('.email-control'); 
//     // Get the value of the input field 
//     let passwordInput = outputPassword.value; 
//     console.log(passwordInput);
//     let firstInput = outputFirstName.value;
//     let lastInput = outputLastName.value;
//     let emailInput = outputEmail.value;

//     let newUser = await db.many('INSERT INTO loginInfo (email, password, firstName, lastName) VALUES ($1, $2, $3, $4) RETURNING *', [emailInput, passwordInput, firstInput, lastInput]); 
//     console.log(newUser);
// }

// signUp();


// app.listen(3000, ()=> {
//     console.log("Server is running on port 3000");
// })
