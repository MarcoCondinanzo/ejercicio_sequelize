require('dotenv').config();

const app=require('./app');

const port = process.env.PORT| 3000; 

app.listen(port, ()=> {
    'Escuchando en el puerto 3000'
});