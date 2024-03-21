const express=require('express');
const app=express();
const port = 3000;
const usuarios=['Juan', 'Jocelyn','Astrid', 'Maria', 'Ignacia', 'Javier','Brian']

app.use(express.static('./assets'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/abracadabra/usuarios', (req, res) => {
    res.json(usuarios);
})

app.listen(port, () => {
    console.log(`Servidor conectado http://localhost:${port}`)
});