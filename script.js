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
            
            let tdId = document.createElement('th');

            let tdName = document.createElement('td');
            tdName.classList.add("edit");

            let tdCity = document.createElement('td');
            tdCity.classList.add("edit");

            let tdBday = document.createElement('td');
            tdBday.classList.add("edit");

            let tdMail = document.createElement('td');
            tdMail.classList.add("edit");

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
                let edit = buttonEdit.parentElement;
                edit = edit.childNodes
                if (buttonEdit.innerText == "Editar") {
                    editar(edit);
                    buttonEdit.innerText = "Aceptar";
                } else {
                    guardarCambio(edit)
                    buttonEdit.innerText = "Editar";
                }
            });
            //añadiendo funcionalidad eliminar
            buttonDelete.addEventListener("click", () => {
                tr.remove();
            })
        }

        function editar(filas) {
            filas.forEach(elemento => {
                if (elemento.className === "edit") {
                    let celdasEditables = document.createElement("input");
                    celdasEditables.value = elemento.innerText;
                    elemento.replaceWith(celdasEditables);
                    celdasEditables.classList.add("edit")
                }
            })
        }

        function guardarCambio(filas) {
            filas.forEach(elemento => {
                if (elemento.className === "edit") {
                    let celdaFinal = document.createElement("td");
                    celdaFinal.innerText = elemento.value;
                    elemento.replaceWith(celdaFinal);
                    celdaFinal.classList.add("edit")
                };
            });
        };

    })
    .catch(error => console.error(error))