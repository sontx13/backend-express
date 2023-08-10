require('dotenv').config();
const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT||3000;
const hostname = process.env.HOST_NAME;
const mongoose = require('mongoose');

//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//console.log(process.env);
//config template engine
configViewEngine(app);
//routers
app.use('/',webRouters );


const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('Kitten', kittySchema);

const cat = new Kitten({ name: 'Silence' });

cat.save();


( async()=>{
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(`>>> error connection db====`, error)
  }
}
)()


