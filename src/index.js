import express from "express"
import bodyParser from "body-parser";
import { create } from "express-handlebars"
import mongoose from "mongoose";
import apiProducts from "./routes/api.js"
import cors from "cors"
const app = express()

await mongoose.connect('mongodb://127.0.0.1:27017/jugueteria').then(db => console.log("siseñor")).catch(err=> console.log("ño"))

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