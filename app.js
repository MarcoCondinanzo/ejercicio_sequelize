const express = require('express');

const userService=require('./servicio');

const app= express();

const logMiddleware=(req, res, next) => {
    console.log(new Date());
    next();
}
app.use(logMiddleware); 

app.get('/', (req,res) => {
    res.send('<h1> Hola </h1>')
    }) ;

app.get('/usuarios', async (req,res) => {
    res.json(await userService.getAllUsers())
});

app.get('/usuarios/:id', async (req,res) => {
    res.json(await userService.getUserByID(req.params.id))} );
    
app.get('/usuarios/sincronico', (req,res) =>{
    userService.getAllUsers()
        .then((usuarios) => { console.log(usuarios)})
        .catch(error => res.send('error'));
})

module.exports = app;