import mongoose, {Schema} from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {type: String, require: true, match: /[\w\s]{2,}/},
    marca: {type: String, require: true, match: /[\w\s]{2,}/},
    categoria: {type: String, require: true, match: /[a-zA-Z\s]{2,}/},
    precio: {type: Number, require: true, min:0},
    descripcion: {type: String, require: true, match: /[\w\s]{2,}/},
    imagenPath: {type: String, require: true, match: /[\w\s]{2,}/}
})


const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel