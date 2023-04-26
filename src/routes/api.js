import {Router} from "express"
import *as carritoContoller from "../controllers/carrito.controllers.js"
import *as ProductController from "../controllers/Product.controller.js"
import multer from "multer";
import { v4 as uuid } from 'uuid'


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        if( file.mimetype.includes("image/") ){
            cb(null, "./public/img")
        }
    },

    filename: (req, file, cb)=>{
        // foto.ejemplo.jpg
        // ["foto","ejemplo","jpg"]
        // ["jpg"]
        const [extName] = file.originalname.split(".").slice(-1)
        const finalName = `${uuid()}.${extName}`
        cb(null, finalName)
    }
})
const upload = multer({storage: storage})


const apiProducts = Router()

apiProducts.get("/api/productos", ProductController.getAll)

apiProducts.get("/api/productos/:id", ProductController.getOne)

apiProducts.post("/api/productos",upload.single("imagen"), ProductController.create)

apiProducts.post("/api/carrito", carritoContoller.getCarrito)

apiProducts.patch("/api/productos/:id", ProductController.update)

apiProducts.delete("/api/productos/:id" ,ProductController.destroy)







export default apiProducts