import express from "express"
import router from "./routes/user.js"

const app = express()

app.use("/api/v1",router)




const PORT = 5000
app.listen(PORT,()=>{
    console.log(`app satrted successfult at ${PORT}`);
    
})