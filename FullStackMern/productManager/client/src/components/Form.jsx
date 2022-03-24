import React,{useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState()
    const [description, setDescription] = useState("")

  return (
    <fieldset>
        <legend>ProductManager.jsx</legend>
        <form>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={setTitle} value="Title"/>
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