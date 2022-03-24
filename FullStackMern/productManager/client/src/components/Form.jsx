import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        e.preventDefault()
        axios.post("", {title, price, description})
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
                <input type="text" name="title" onChange={e=>setTitle.target.value} value={Title} className="form-control"/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" onChange={setPrice} value="Price"/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" name="desciption" onChange={setDescription} value="Description"/>
            </div>
        </form>
    </fieldset>
  )
}

export default Form