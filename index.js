const express=require("express")
const app=express()
require("dotenv").config();
const port=process.env.PORT||5000;
const db=require('./models') 
const postRouters=require('./Routes/Posts')
app.use(express.json())

app.use('/posts',postRouters)
db.sequelize.sync().then(()=>{

    app.listen(port, () => {
        console.log("Running on port", port);
    
    })
    
    
})
