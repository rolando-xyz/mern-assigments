import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const CreateAuthor = () => {
    const [authorName, setAuthorName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors/new",{authorName})
            .then(res => history.push("/"))
            .catch(err => {
                const errResponse = err.response.data.errors
                console.log(errResponse)
                let errArr = []
                for(const key of Object.keys(errResponse)){
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr)
            })
    }

    const clearForm = () => {
        setAuthorName("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="authorName" value={authorName} onChange={e=>setAuthorName(e.target.value)} className="form-control"/>
            </div>
            <button className='btn btn-primary btn-block'>Create Author</button>
            <button type="button" className='btn btn-default btn-block' onClick={clearForm}> Cancel</button>
        </form>
        {
            errors.map((err, i) =>(
                <p style={{color:"red"}} key={i}>{err}</p>
            ))
        }
    </div>
  )
}

export default CreateAuthor