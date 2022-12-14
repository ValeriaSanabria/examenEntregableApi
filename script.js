const api = 'https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

let apiManipular;


fetch(api)
    .then(response => response.json())
    .then(data => {
        apiManipular = data

        // testeo de cantidad de objetos dentro de la array
        console.log(apiManipular.length)
        // testeo de traer solamente los nombres
        apiManipular.forEach(element => console.log(element.name));
        // testeo de traer solamente la city
        apiManipular.forEach(element => console.log(element.city));
        // testeo de traer los birthday 
        apiManipular.forEach(element => console.log(element.birthday));
        // testeo de traer solamente los email
        apiManipular.forEach(element => console.log(element.email));
        // testeo de traer solamente los id
        apiManipular.forEach(element => console.log(element.id));

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            // creo los elementos dentro del tbody
            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdCity = document.createElement('td');
            let tdBday = document.createElement('td');
            let tdMail = document.createElement('td');
            let tdId = document.createElement('td');
            let buttonEdit = document.createElement("button");
            let buttonDelete = document.createElement("button");


            // le inserto los valores al tr y td
            tdName.innerText = element.name;
            tdCity.innerText = element.city;
            tdBday.innerText = element.birthday;
            tdMail.innerText = element.email;
            tdId.innerText = element.id;
            buttonEdit.innerText = "Editar";
            buttonDelete.innerText = "Eliminar";



            // agarro el tbody y voy insertando en el html 
            let tbody = document.getElementById('tab');
            tbody.appendChild(tr);
            tr.appendChild(tdName);
            tr.appendChild(tdCity);
            tr.appendChild(tdBday);
            tr.appendChild(tdMail);
            tr.appendChild(tdId);
            tr.appendChild(buttonEdit);
            tr.appendChild(buttonDelete);

            buttonEdit.addEventListener("click", () => {
                let editables = buttonEdit.parentElement;
                editables = editables.childNodes
                if (buttonEdit.innerText == "Editar") {
                    editar(editables);
                    buttonEdit.innerText = "Aceptar";
                } else {
                    terminarCambio(editables)
                    buttonEdit.innerText = "Editar";
                }
            });
            //añadiendo funcionalidad eliminar
            buttonDelete.addEventListener("click", () => {
                tr.remove();
            })

        }

    })
    .catch(error => console.error(error))