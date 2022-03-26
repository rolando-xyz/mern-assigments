import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
    },[refresh])

    const handleDelete = (deleteId) => {
        axios.delete(`httlp://localhost:8000/api/products/delete/${deleteId}`)
            .then(res => {
                const filteredList = products.filter((product)=>product._id !== deleteId)
                setProducts(filteredList)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        {
            products?
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td><Link to={`/product/${product._id}`}>{product.title}</Link></td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td><Link to={`/product/update/${product._id}`}>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={()=>handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>:
            <h1>please add products</h1>
        }
    </div>
  )
}

export default Dashboard