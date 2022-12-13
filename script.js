
const api='https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees';

let apiManipular ;

console.log("aqui mis testeos:")


fetch(api)
    .then(response => response.json())
    .then(data => {
        apiManipular = data
        console.log("1- testeo de cantidad de objetos dentro de la array:")
        console.log(apiManipular.length)
        console.log("2- testeo de traer solamente los nombres")
        apiManipular.forEach(element => console.log(element.name));
        console.log("2- testeo de traer solamente los city")
        apiManipular.forEach(element => console.log(element.city));
        console.log("2- testeo de traer solamente los email")
        apiManipular.forEach(element => console.log(element.email));
        console.log("2- testeo de traer solamente los id")
        apiManipular.forEach(element => console.log(element.id));
    
        /*for (let i=0 ; i < apiManipular.length; i++){
            console.log(apiManipular[i].name)
        }*/
        
    })
    .catch(error => console.error(error))
    



