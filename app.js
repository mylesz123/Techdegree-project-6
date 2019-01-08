//**project requires express, passed in as parameter
const express = require('express');

const app = express();

//set(settings) view engine for app to use pug templates
app.set('view engine', 'pug');

app.get('/', (req,res) => {//home page route
  res.send('Welcome to my pug page!'); //response sent back, what you see on the screen

});

app.get('/hello', (req,res) => {
  res.render('index'); //index.pug
});

app.listen(3000, () => {
  console.log('App is running on localhost: 3000 ')
});//3000 is the port
