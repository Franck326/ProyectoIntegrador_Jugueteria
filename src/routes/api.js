import {Router} from "express"


import *as ProductController from "../controllers/Product.controller.js"
const apiProducts = Router()

apiProducts.get("/api/productos", ProductController.getAll)


apiProducts.get("/api/productos/:id", ProductController.getOne)


apiProducts.post("/api/productos", ProductController.create)


apiProducts.patch("/api/productos/:id", ProductController.update)


apiProducts.delete("/api/productos/:id" ,ProductController.destroy)


export default apiProducts