/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Hola Janus :)')

//const url = "https://platzi-avo.vercel.app/api/avo";
const baseUrl = "https://platzi-avo.vercel.app";
const appNode=document.querySelector('#app');

window.fetch(`${baseUrl}/api/avo`)
    .then((respuesta) => respuesta.json())

    .then((respuestaJson) => {
        const todoslositem = [];

        respuestaJson.data.forEach((item) => {
            //imagen
            const imagen = document.createElement("img");
            imagen.src  = `${baseUrl}${item.image}`;
            //document.body.appendChild(imagen);
            //Titulo
            const titulo = document.createElement("h2");
            titulo.textContent = item.name;
            titulo.style= "font-size:2rem";
            //document.body.appendChild(titulo);
            //precio
            const price = document.createElement("div");
            price.textContent = item.price;
            //document.body.appendChild(price);

            const container = document.createElement("div");
            container.append(imagen, titulo, price);

            todoslositem.push(container);
        });
        appNode.append(...todoslositem);

    });

