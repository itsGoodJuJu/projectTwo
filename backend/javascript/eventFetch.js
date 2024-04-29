
async function testName() {
     
    await fetch("http://localhost:3000/event")
    .then(res => res.json())
    .then(data => {
        let outputName = document.querySelector('#searchInput'); 
        // Get the value of the input field 
        let userInput = outputName.value;
        console.log(data[0].name);
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
                }
            } if(userInput != data[i].name) {
                document.querySelector('#returnName').innerText = "* EVENTACLE DOES NOT EXIST. CREATE EVENTACLE ABOVE. ^ *";
            }
        }
    })
}




// function returnEvent() {
//     fetch("http://localhost:3000/event")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         let eventName = document.getElementById('returnName');
//         let eventLocation = document.getElementById('returnLoc');
//         let eventDate = document.getElementById('returnDate');
//         let eventTime = document.getElementById('returnTime');
//         let eventComment = document.getElementById('returnCom');

//         let selectedName = data[0];
//         let selectedPokemon2 = data[1];
//         let selectedPokemon3 = data[2];
//         let selectedPokemon4 = data[3];
//         let selectedPokemon5 = data[4];
//         let selectedPokemon6 = data[5];

//         let pokemon1Image = document.createElement('img');
//         let pokemon2Image = document.createElement('img');
//         let pokemon3Image = document.createElement('img');
//         let pokemon4Image = document.createElement('img');
//         let pokemon5Image = document.createElement('img');
//         let pokemon6Image = document.createElement('img');


//         pokemon1Image.setAttribute('src', selectedPokemon1.image);
//         pokemon1Image.setAttribute('class', 'playerteam');

//         pokemon2Image.setAttribute('src', selectedPokemon2.image);
//         pokemon2Image.setAttribute('class', 'playerteam');

//         pokemon3Image.setAttribute('src', selectedPokemon3.image);
//         pokemon3Image.setAttribute('class', 'playerteam');

//         pokemon4Image.setAttribute('src', selectedPokemon4.image);
//         pokemon4Image.setAttribute('class', 'playerteam');

//         pokemon5Image.setAttribute('src', selectedPokemon5.image);
//         pokemon5Image.setAttribute('class', 'playerteam');

//         pokemon6Image.setAttribute('src', selectedPokemon6.image);
//         pokemon6Image.setAttribute('class', 'playerteam');

//         pokemonPic1.innerHTML = '';
//         pokemonPic1.appendChild(pokemon1Image);

//         pokemonPic2.innerHTML = '';
//         pokemonPic2.appendChild(pokemon2Image);

//         pokemonPic3.innerHTML = '';
//         pokemonPic3.appendChild(pokemon3Image);

//         pokemonPic4.innerHTML = '';
//         pokemonPic4.appendChild(pokemon4Image);

//         pokemonPic5.innerHTML = '';
//         pokemonPic5.appendChild(pokemon5Image);

//         pokemonPic6.innerHTML = '';
//         pokemonPic6.appendChild(pokemon6Image);
//     });
// }