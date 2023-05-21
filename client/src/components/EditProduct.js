import React,{Fragment,useState} from "react";

const EditProduct = ({prod}) => {
  const [description, setDescription] = useState(prod.description)
  const updateDescription = async(e) => {
    e.preventDefault()
    try {
      const body = {description}
      const response = await fetch(`http://localhost:3500/products/${id}`,{
        "method":"PUT",
        "header":{"Content-Type":"application/json"},
        "body":JSON.stringify(body)
      })
      window.Location = "/"
    } catch (err) {
      
    }
  }
    return(
        <Fragment>
          <div class="container">
            <button type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={`id${prod.manufacturing_id}`}
            onClick={updateDescription}
            >
               Edit
            </button>
            <div class="modal" id={`id${prod.manufacturing_id}`}>
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Edit product</h4>
                    <button type="button" class="close" 
                    onClick={() => setDescription(prod.description)}
                    data-dismiss="modal"
                    >&times;
                    </button>
                  </div>
                  <div class="modal-body">
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-warning" onClick={e => updateDescription(e)} data-dismiss="modal">Edit</button>
                    <button type="button" class="btn btn-danger" onClick={() => setDescription(prod.description)} data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
           </div>
          </div>
        </Fragment>
    )
}

export default EditProduct