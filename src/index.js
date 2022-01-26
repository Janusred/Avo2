/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Hola Janus :)')

const url = "https://platzi-avo.vercel.app/api/avo";

window.fetch(url).then(respuesta => respuesta.json())

    .then((respuestaJson) => {
        const todoslositem=[];

        respuestaJson.data.forEach((item) => {
            //imagen
            const imagen = document.createElement("img");
            //document.body.appendChild(imagen);
            //Titulo
            const titulo = document.createElement("h2");
            //document.body.appendChild(titulo);
            //precio
            const price = document.createElement("div");
            //document.body.appendChild(price);
            
            const container=document.createElement("div");
            container.append(imagen,titulo,price);

            todoslositem.push(container);
        });
document.body.append(...todoslositem);

    });
 
