require('dotenv').config();
const express = require('express');
const path = require('path');

const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');


const app = express();
const port = process.env.PORT||3000;
const hostname = process.env.HOST_NAME;

//console.log(process.env);
//config template engine
configViewEngine(app);
//routers
app.use('/',webRouters );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})