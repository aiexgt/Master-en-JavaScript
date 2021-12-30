'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor")
//jsonplaceholder
/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        usuarios = data;
        console.log(usuarios);
    });
*/

//reqres.in
getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
        return getInfo();
    })
    .then(data => {
        var profe = JSON.parse(data);
        div_profesor.innerHTML = "Nombre: " + profe.nombre + "\n Apellidos: " + profe.apellidos + "\n URL: " + profe.url;
        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        console.log("Error en las peticiones: " + error);
    });

function getJanet(){
    return fetch('https://reqres.in/api/users/2');
};

function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2');
};

function getInfo(){
    var profesor = {
        nombre: 'Victor',
        apellidos: 'Robles',
        url: 'https://victorroblesweb.es'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(()=>{
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');
            return resolve(profesor_string);
        }, 3000);
        
    });
}

function listadoUsuarios(usuarios){
    usuarios.map((users,i) =>{
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + ". " + users.first_name + " " + users.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display = 'none';
    });
};

function mostrarJanet(user){
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display = 'none';
};