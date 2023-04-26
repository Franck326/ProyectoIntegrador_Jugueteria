import express from "express"
import bodyParser from "body-parser";
import { create } from "express-handlebars"
import mongoose from "mongoose";
import apiProducts from "./routes/api.js"
import cors from "cors"
import * as dotenv from 'dotenv'


const app = express()

dotenv.config({path: "./.env"})

await mongoose
.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`)    
.then(db => console.log(`conectado a base de datos: ${process.env.DB_NAME}`))
.catch(err=> console.log(`error al conectar con la base de datos: ${err}`))

app.set('port' , process.env.PORT || 8080);
const hbs = create({
    extname: ".hbs"
})








app.use(bodyParser.json())
app.engine("hbs", hbs.engine)


app.set("view engine", "hbs")
app.set("views", "./src/views")







//mid

app.use( express.static("./public"))



//ACA PONER MIDWARDE



app.use(apiProducts)


// esto va despues de la api


app.get("*", (req, res) => {
    res.render("index", {layout:false, url: req.url })
})





app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})