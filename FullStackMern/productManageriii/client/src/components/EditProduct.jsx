import React, {useEffect, useState} from 'react'
import axios from "axios"
import { useParams, useHistory } from 'react-router-dom'

const EditProduct = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch(err => console.log(err))
    },[])

    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`,{title,price,description})
        .then(res => history.push("/"))
        .catch(err => console.log(err))
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
            <button className='btn'>Edit</button>
        </form>
    </fieldset>
  )
}

export default EditProduct