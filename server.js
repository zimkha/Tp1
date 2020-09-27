const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const productRouter = require('./routes/api/product');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Router
app.use('/product', productRouter)


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());
app.use(express.static('public'))

// Routing between page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views', 'index.html'))
})



// Css 
app.get('/public/css/base.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/css/base.css'))
})
app.get('/public/css/sb-admin-2.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/css/sb-admin-2.min.css'))
})
app.get('/public/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/css/style.css'))
})
app.listen(port, () => {
  console.log(`server runing in port ${port}`)
});

