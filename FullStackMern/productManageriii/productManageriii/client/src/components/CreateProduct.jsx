import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products/new", {title, price, description})
        .then(res=> history.push("/"))
        .catch(err=> {
            const errArr = err.response.data.errors
            console.log(errArr)
        })
    }

  return (
    <fieldset>
        <legend>ProductManager.jsx</legend>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={e=>setTitle(e.target.value)} value={title} className="form-control"/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" onChange={e=>setPrice(e.target.value)} value={price} className="form-control"/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="description" onChange={e=>setDescription(e.target.value)} value={description} className="form-control"/>
            </div>
            <button className='btn'>Create Product</button>
        </form>
    </fieldset>
  )
}

export default CreateProduct