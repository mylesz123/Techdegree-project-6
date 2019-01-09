//project requires express, passed in as parameter
const express = require('express');
//require data from json file to fill in templates in project.pug file
const data = require('./data.json')
//creating new instance of express
const app = express();
//nodemon so i dont have to keep going in the terminal 
const nodemon = require('nodemon')

//set(settings) view engine for app to use pug templates
app.set('view engine', 'pug');

//start public server to serve static files like style sheets
app.use('/static', express.static('public'))

// app.get('/hello', (req,res) => {//home page route
//   res.send('Welcome to my pug page!'); //response sent back, what you see on the screen
// });

app.get('/', (req, res) => { //home page route
	//response render index template with data passed in
	res.render('index', {
		data
	})
})

//about route
app.get('/about', (req, res) => {
	//render about
	res.render('about')
})

app.get('/hello', (req,res) => {
  res.render('project', {
		data: data,
		id: req.params.id
	})
  res.render('index'); //index.pug

});

//project route with req param of id
// app.get('/project:id', (req, res) => {
// 	res.render('project', {
// 		data: data,
// 		id: req.params.id
// 	})
// })

app.listen(3000, () => {
  console.log('App is running on localhost: 3000 ')
});//3000 is the port
