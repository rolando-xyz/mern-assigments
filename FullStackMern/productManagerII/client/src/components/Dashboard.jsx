import React, {useEffect, useState} from 'react'
import axios from "axios"

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
                                <tr>
                                    <td>{product.title}</td>
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