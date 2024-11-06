const express = require("express");
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require("mongoose");
const productRoutes = require('./routers/productRoutes');



const MONGO_URL = 'mongodb://127.0.0.1:27017/ecommerceDB';

async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
})


app.engine('ejs', ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');



// Routes
app.use('/', productRoutes);

app.get('/products', (req, res) => res.redirect('/products'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
