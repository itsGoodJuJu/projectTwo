
async function returnEvent() {
     
    await fetch("http://localhost:3000/event")
    .then(res => res.json())
    .then(data => {
        let outputName = document.querySelector('#searchInput'); 
        // Get the value of the input field 
        let userInput = outputName.value;
        for(i = 0; i < data.length; i++) {
            if(userInput == data[i].name) {
                document.querySelector('#returnName').innerText = data[i].name;
                document.querySelector('#returnLoc').innerText = data[i].location;
                let date= new Date(data[i].date);
                let formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`; 
                document.querySelector('#returnDate').innerText = formattedDate;
                document.querySelector('#returnTime').innerText = data[i].time;
                document.querySelector('#returnCom').innerText = data[i].description;
                if(data[i].description == null) {
                    document.querySelector('#returnCom').innerText = "(no comments added)";
                };
                return;
            } else {
                document.querySelector('#returnName').innerText = "* EVENTACLE DOES NOT EXIST. CREATE EVENTACLE ABOVE. ^ *";
            }
        }
    })
}

async function deleteEvent() {
    await fetch("http://localhost:3000/event")
    .then(res => res.json())
    .then(data => {
        let outputName = document.querySelector('#deleteInput'); 
        // Get the value of the input field 
        let userInput = outputName.value;
        for(i = 0; i < data.length; i++) {
            if(userInput == data[i].name) {
                
                return;
            } else {
                document.querySelector('#returnName').innerText = "* EVENTACLE DOES NOT EXIST. CREATE EVENTACLE ABOVE. ^ *";
            }
        }
    })
}




