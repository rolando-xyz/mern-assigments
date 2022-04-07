import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'

const OneProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    console.log(id);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => setProduct())
    },[])

  return (
    <div>
        {
            product?
                <div>
                    <h5> Title: {product.title}</h5>
                    <h5> Title: {product.price}</h5>
                    <h5> Title: {product.description}</h5>
                </div>:
                <h1> make sure Id is correct </h1>
        }
    </div>
  )
}

export default OneProduct