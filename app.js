const express = require('express')
const bodyParser=require('body-parser')
const routes=require('./routes')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use('/',routes);
//app.get('/',(req,res)=>res.send("hello"));

app.use((error,req,res,next) =>
{
    res.json(
        {
            success: false,
            error
        }
    )
}
);
app.listen(port,()=>{
    
})
module.exports=app;