
fetch('https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees')
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${data[0].name} Apellido: ${data[0].city}`);

    })
    .catch(error => console.error(error));