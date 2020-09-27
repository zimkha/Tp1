
const  express  = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express()

const productRouter = require('./routes/api/product');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/product', productRouter)




const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`));


 