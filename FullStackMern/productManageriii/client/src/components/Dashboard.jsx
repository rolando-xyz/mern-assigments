import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
    },[])

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