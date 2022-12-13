let inputName = document.getElementById('name');
let inputSurname = document.getElementById('surname');
let btn = document.querySelector('.btn');

btn.addEventListener('click', addUser)
        
function addUser(name) {
    // creo los elementos dentro del tbody
    let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdSurname = document.createElement('td');
        
        // le inserto los valores al input
        tdName.innerText = inputName.value;
        tdSurname.innerText = inputSurname.value;

        // agarro el tbody y voy insertando en el html 
        let tbody = document.getElementById('tab');
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
}




fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${data.results[0].name.first} Apellido: ${data.results[0].name.last}`);

        inputName.value = data.results[0].name.first;
        inputSurname.value = data.results[0].name.last;

        
    })
    .catch(err => console.error('Hubo un problem') + err.message);