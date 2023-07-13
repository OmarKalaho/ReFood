require('dotenv').config();
const express = require('express');
const giveAwayRoutes = require('./routes/giveAwayRoutes');
const foodTrashCanRoutes = require('./routes/foodTrashCanRoutes');

const mongoose =require('mongoose');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: '*'
}))
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//   });
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});

app.use('/api/giveAways', giveAwayRoutes);
app.use('/api/foodTrashCans',foodTrashCanRoutes);

app.get('/', (req, res) => { 
    res.json({ message: 'hello world' }) })


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    if(process.env.PORT){
    app.listen(process.env.PORT, () => {
        console.log('server is running on port 4000!');
    });}    
})
.catch((err)=>{
    console.log(err);
})

module.exports = app;