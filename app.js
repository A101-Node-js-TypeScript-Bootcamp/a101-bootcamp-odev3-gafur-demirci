const express = require('express');
const productRoute = require('./routes/productRoute');

const app = express();

app.use(express.json());

// http://localhost:5000/products
app.use('/products',productRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up to ${port}`);
}) 