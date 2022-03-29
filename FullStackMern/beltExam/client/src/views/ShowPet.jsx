import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useHistory} from 'react-router-dom'

const ShowPet = () => {
    const {id} = useParams()
    const [pet, setPet] = useState({})
    const history = useHistory()
    console.log(id);
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then(res => setPet(res.data))
        .catch(err => setPet())
    },[])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
            .then(res=>history.push("/"))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <button className='btn btn-danger' onClick={(() => handleDelete(pet._id))}>Delete</button>
        {
            pet?
                <div>
                    <h5> Details about: {pet.petName}</h5>
                    <h5> Pet Type: {pet.petType}</h5>
                    <h5> Pet Description: {pet.petDescription}</h5>
                    <h4>skills</h4>
                    <h5> Skill 1: {pet.skill1}</h5>
                    <h5> Skill 2: {pet.skill2}</h5>
                    <h5> Skill 3: {pet.skill3}</h5>
                </div>:
                <h1> make sure Id is correct </h1>
        }
    </div>
  )
}

export default ShowPet