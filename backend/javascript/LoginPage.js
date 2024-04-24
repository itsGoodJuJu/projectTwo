// let a = username.Text
// let b = password.Text

// if(username.Text == "a" && password.Text == "a") {
    
// }

const {createPool} = require('mysql')

const pool = createPool ( {
    host: "localhost",
    user: "root",
    password: "rootuser",
    connectionLimit: 10
})

pool.query('select * from apid.users', (err, res)=> {
    return console.log(res)
})


app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
})
