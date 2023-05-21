import React,{Fragment,useState} from 'react'

const InputProduct = () => {
    const [description, setDescription] = useState("")
    const formSubmit = async(e) =>{
        const body = {description}
        try {
            const response = await fetch(`http://localhost:3500/products`,{
                "method":"POST",
                "headers":{'Content-Type':"application/json"},
                "body":JSON.stringify(body)
            })
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <Fragment>
            <h1 className='text-center mt-5'>Workshop machines</h1>
            <form className='d-flex mt-5' onSubmit={formSubmit}>
                <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    )
}

export default InputProduct