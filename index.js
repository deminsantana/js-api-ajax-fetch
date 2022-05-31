// Petición AJAX o consumir una API desde JavaScript vanilla.
const API_URL = 'http://localhost:4000/api';

// ===== Método 1: con Ajax (XMLHttpRequest) =======
// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if(this.readyState === 4 && this.status === 200) {
//          // Estados del "readyState":
//         // 0 = UNSET, no se ha llamado al método open.
//         // 1 = OPENED, se ha llamado al método open.
//         // 2 = HEADERS_RECEIVED, se esta llamando al método send().
//         // 3 = LOADING, está cargando, es decir, esta recibiendo la respuesta.
//         // 4 = DONE, se ha completado la operación.
//         const data = JSON.parse(this.response);
//         const HTMLResponse = document.querySelector("#app");

//         const tpl = data.map(products => `<li>${products.name} 💰${products.price}</li>`);
//         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     }
// }

// xhr.addEventListener("load", onRequestHandler);
// xhr.open('GET', `${API_URL}/products`);
// xhr.send(); 

// ===== Método 2: utilizando el API de Fetch =============

const HTMLResponse = document.querySelector("#app");


// Utilizando Strings para formatear el HTML
// const tpl = [];
// fetch(`${API_URL}/products`)
//     .then((response) => response.json())
//     .then((products) => {
//         const tpl = products.map((product) => `<li>${product.name} 💰${product.price}</li>`);
//         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     });

// Utilizando elementos del DOM (nodos del DOM) para formatear HTML
const ul = document.createElement('ul');

fetch(`${API_URL}/products`)
    .then((response) => response.json())
    .then((products) => {
        products.forEach((product) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${product.name} 💰${product.price}`)
            );
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    });