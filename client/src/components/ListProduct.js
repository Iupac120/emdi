import React,{Fragment,useState,useEffect} from 'react'

const ListProduct = () =>{
    const [product, setProduct] = useState([])
    const deleteProduct = async(id) => {
        try {
            const product = await fetch('http://localcolhost',{
                "method":"DELETE"
            })
            setProduct(product.filter(prod => prod.manufacturing_id !== id))
        } catch (err) {
          console.log(err)  
        }
    }
    const getProduct = async() => {
        try {
            const response = await fetch('localhost')
            const data = await response.json()
            setProduct(data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProduct()
    })
    return(
        <Fragment>            
  <table class="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            product.map(prod => (
                <tr key={prod.manufacturing_id}>
                <td>{prod.description}</td>
                <td>Edit</td>
                <td>
                    <button className='btn btn-danger' onClick={() => deleteProduct(prod.manu)}>Delete</button>
                </td>
              </tr>
            ))
        }
    </tbody>
  </table>
        </Fragment>
    )
}