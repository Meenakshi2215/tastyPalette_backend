//import json server library in index.js
const jsonserver = require('json-server')
//create server using json server library
const recipeAppServer = jsonserver.create()
//create path to db.json
const router = jsonserver.router('db.json')
//create middleweares
const middleware = jsonserver.defaults()
//connect/use middlewearws
recipeAppServer.use(middleware)
recipeAppServer.use(router)
//setup port
const port = 4000 || process.env.PORT 
//request resolve 
recipeAppServer.listen(port,()=>{
    console.log(`recipeAppServer started at ${port} and ready to fetch request`);
})