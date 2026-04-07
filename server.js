require("dotenv").config();
const app = require("./src/app");

const Port = process.env.PORT || 3000

app.listen(Port,()=>{
    console.log(`Server is successfully running on ${Port}`)
})