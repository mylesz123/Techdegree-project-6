//project requires express, passed in as parameter
const express = require('express');
const app = express();
//require data from json file to fill in templates in project.pug file
const data = require('./data.json');

//app.settings view engine for app to use pug templates
app.set('view engine', 'pug');

//.use public server to use static files (images, css)
app.use('/static', express.static('public'));

/********************/
/******	ROUTES ******/
/********************/

app.get('/', (req, res) => { //home page
	res.render('index', {data})
})

app.get('/about', (req, res) => {
	res.render('about')//about.pug
})

app.get('/:id', (req, res) => {
  res.render('project', {//project.pug
		//something is going wrong here
		data,
		id: req.params.id //request id
	})
});

/********************/
/*****  ERRORS  *****/
/********************/

//404 error for routes that are not found
app.use((req, res, next) => {
	const erro = new Error('Sorry, Page Not Found ')
	erro.status = 404
	next(erro)
});

app.use((erro, req, res, next) => {
	res.locals.error = erro
	res.render('error') //error.pug
})
//end ERRORS

app.listen(3000, () => {
  console.log('App is running on localhost port: 3000 ')
})
