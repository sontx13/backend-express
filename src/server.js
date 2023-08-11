require('dotenv').config();
const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const apiRouters = require('./routes/api');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT||3000;
const hostname = process.env.HOST_NAME;


//config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//console.log(process.env);
//config template engine
configViewEngine(app);
//routers
app.use('/',webRouters );
app.use('/v1/api/',apiRouters );

//const cat = new Kitten({ name: 'sontx' });
  
//cat.save();


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


