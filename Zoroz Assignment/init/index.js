const mongoose = require('mongoose');
const Product = require('../models/product');
const dummyData = require('./data');


const MONGO_URL = 'mongodb://127.0.0.1:27017/ecommerceDB';

async function main(){
    await mongoose.connect(MONGO_URL)
}

main().then(()=>{
    console.log("Database Connected");
}).catch(err => {
    console.log(err);
})


const initDB = async ()=> {
    await Product.deleteMany({});
    await Product.insertMany(dummyData.data);
    console.log("data was initialized");
}


initDB();