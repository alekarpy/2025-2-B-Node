const express = require('express'); // Express es una libreria de codigo para montar un servidor
const app = express(); // constante app que va a tener la app de express

let port = 3000; // funcionará en el puerto 3000

app.get("/", (req, res) => {
    res.send("HOLA!");
});

// Petición y Respuesta, cuando se haga una petición al servidor, se responderá al a través del request al cliente con HOLA!

app.get("/home", (req, res) => {
    res.send("HOLA desde el HOME!");
}); // Petición y Respuesta, cuando se haga una petición al servidor, se responderá al a través del request al cliente con HOLA!





app.listen(port, () => { // Escucha en el puerto 3000,y se ejecutará en el servidor.
    console.log("Servidor iniciado");
});


node server.js // para ejecutar el servidor. El servidor solo escucha.

localhost:3000 // para ver el servidor en el navegador. Se verá en el lado del cliente



function generatePassword () {
    const abc = ["a", "b",  ]
}
    return "Mipassword123";
}

