const pool = require('../db')

const createProduct = async(req,res) => {
    try{
        const {description} = req.body
        const product = await pool.query("INSERT INTO manufacturing(description)VALUES($1) RETURNING *",[description])
        res.status(201).json(product.rows[0])
    }catch(err){
        console.log(err.message)
    }
}    
const getAllProduct = async(req,res) => {
    try{
        console.log('create')
        const product = await pool.query("SELECT * FROM manufacturing RETURNING *")
        res.status(201).json(product.rows)
    }catch(err){
        console.log(err.message)
    }
}


const getProduct = async(req,res) => {
    try{

        const product = await pool.query("SELECT * FROM manufacturing WHERE manufacturing_id = $1",[req.params.id])
        res.status(201).json(product.rows[0])
    }catch(err){
        console.log(err)
    }
}

const updateProduct = async(req,res) =>{
    try {
        const {id} = req.params
        const {description} = req.body
        const product = await pool.query("UPDATE manufacturing SET description = $1 WHERE manufacturing_id = $2",[description,id])
        res.status(201).json({msg:'Product is updated'})
    } catch (err) {
        console.log(err.message)
    }
}


const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params
        const product = await pool.query("DELETE FROM manufacturing WHERE  manufacturing_id = $1",[id])
        res.status(201).json({msg:"Product is deleted"})
    }catch(err){
        console.log(err.message)
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
