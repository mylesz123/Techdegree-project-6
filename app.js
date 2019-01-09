//project requires express, passed in as parameter
const express = require('express');
const app = express();
//require data from json file to fill in templates in project.pug file
const data = require('./data.json');
//nodemon so i dont have to keep going in the terminal
//const nodemon = require('nodemon');

//app.settings view engine for app to use pug templates
app.set('view engine', 'pug');

//.use public server to use static files (images, css)
app.use('/static', express.static('public'));

/*	ROUTES  */
app.get('/', (req, res) => { //home page
	//res.send('Welcome to my pug page!'); //response sent back, what you see on the screen
	//render index template with data passed in from data.json
	res.render('index', {data})
})

app.get('/about', (req, res) => {
	res.render('about')//about.pug
})

app.get('/hello', (req, res) => {
  res.render('project', {//project.pug
		data: data,//something is going wrong here
		id: req.params.id //request id
	})
});

//end ROUTES

/*  ERRORS  */
//404 error for routes that are not found
app.use((req, res, next) => {
	const error = new Error('Sorry, Page Not Found: Error Status --  ')
	error.status = 404
	next(error)
});
app.use((erro, req, res, next) => {
	res.locals.error = erro
	res.render('error') //error.pug
})
//end ERRORS

app.listen(3000, () => {
  console.log('App is running on localhost port: 3000 ')
})
