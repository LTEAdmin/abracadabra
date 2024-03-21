const express = require("express");
const app = express();
const port = 3000;
const usuarios = [
  "Juan",
  "Jocelyn",
  "Astrid",
  "Maria",
  "Ignacia",
  "Javier",
  "Brian",
];

app.use(express.static("./assets"));

app.get("/", (req, res) => {
  res.send("Abracadabra");
});

// ruta generica no encontrada
app.get("*", (req, res) => {
  res.send("Esta pagina no existe...");
});

// ruta usuarios
  app.get("/abracadabra/usuarios", (req, res) => {
    res.json(usuarios);
  });

// buscar conejo
app.get("/abracadabra/conejo/:id", (req, res) => {
  const num = +req.params.id;
  const numeroMath = Math.floor(Math.random() * 3) + 1;

  if (num == numeroMath) {
    res.sendFile(__dirname + "./assets/img/conejo.jpg");
  } else {
    res.sendFile(__dirname + "./assets/img/voldemort.jpg");
  }
  res.send("conejo");

  app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const usuario = req.params.usuario;
    const esUsuario = usuarios.map((u) => u.includes(usuarios));

    esUsuario ? next() : res.sendFile(__dirname + "./assets/img/who.jpeg");
  });
  // crear midelware
  app.get("/abracadabra/juego/:usuario", (req, res) => {
    res.sendFile(__dirname + "index.html");
  });
});

app.listen(port, () => {
  console.log(`Servidor conectado http://localhost:${port}`);
});
