import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [authors, setAuthors] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    },[])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(res => {
                const filteredAuthors = authors.filter((author) => author._id !== deleteId)
                setAuthors(filteredAuthors)
            })
            .catch(err => console.log(err))
    }

  return (
    <div>
        <Link to="/authors/new">New Author</Link>
        {
            authors?
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authors.map((author, i) => (
                                <tr key={i}>
                                    <td>{author.authorName}</td>
                                    <td><Link className='btn btn-success' to={`/authors/edit/${author._id}`}>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={(() => handleDelete(author._id))}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>:
                <h1>tttttt</h1>
        }
    </div>
  )
}

export default Dashboard