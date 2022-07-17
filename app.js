const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

/*Rutas estaticas y publicas*/
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './src')));

/*Archivo de rutas*/
const routes = require('./src/routes/routes.app')(app);

app.listen('3002', error =>{
	if(error){
		throw eror;
	}console.log("Servidor corriendo en el puerto 3002")
})		