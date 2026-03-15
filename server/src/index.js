import {app} from './app.js'
import connectDb from './db/index.js'
const port = process.env.PORT || 3000

connectDb()
.then(()=>{
    console.log("Database connected succesfully");
})
.catch((error)=>{
    console.log("database connection error");
    throw error
})

app.get('/', (req, res) => {
    res.send("this is home page")
})

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

