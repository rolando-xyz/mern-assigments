import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'

const EditJob = () => {
    const {id} = useParams()
    const [authorName, setAuthorName] = useState("")
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setAuthorName(author.authorName)
            })
            .catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorName})
        .then(res => history.push("/"))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="authorName" value={authorName} onChange={e=>setAuthorName(e.target.value)} className="form-control"/>
            </div>
            <button className='btn btn-primary btn-block'>Create Author</button>
        </form>
    </div>
  )
}

export default EditJob