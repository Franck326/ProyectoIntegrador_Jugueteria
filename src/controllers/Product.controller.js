import { response } from "express";
import ProductModel from "../models/Product.model.js";


export const getAll = async (req, res) => {
    const {query} = req.query ?? {}
    
    
    const products = await ProductModel.find(query)
    res.json(products)
}

export const getOne = async (req, res) => {
    const{id} = req.params
    try{
    const product = await ProductModel.findOne({_id:id})
    res.json(product ?? {})
    }catch(error) {
        res.status(500).json({errorMsg: "error"})
    }
}

export const create = async (req, res) => {
    const {body,file} = req 
    console.log("body", body)
    console.log("file", req.file)
    const product = new ProductModel
    product.nombre = body.nombre
    product.marca = body.marca
    product.categoria = body.categoria
    product.precio = body.precio
    product.descripcion = body.descripcion
    product.imagenPath = (file) ? `/img/${file.filename}` : "img/noImg.jpg"

    try {
        await product.save()
        res.json(product)
    } catch (error) {
        res.status(500).json({errorMsg: "error"})
    }

}
export const subirImg = async (req, res) => {

}

export const update =async (req, res) => {
    const {id} = req.params
    const {body} = req
    try{
    const product = await ProductModel.findOneAndUpdate({_id:id},{new:true},body)
    res.json(result)
    }catch(error){
        res.status(500).json({errorMsg: "error"})
    }
}

export const destroy = async (req, res) => {
    const {id} = req.params
    try{
        const result = await ProductModel.deleteOne({_id:id})
        res.status(200).json({res:result})

    }catch(error){
        console.log(error)
        res.status(500).json({errorMsg: error})

    }
}