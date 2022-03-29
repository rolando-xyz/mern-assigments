import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useHistory, useParams} from 'react-router-dom'

const EditPet = () => {
    const {id} = useParams()
    const [petName, setPetName] = useState("")
    const [petType, setPetType] = useState("")
    const [petDescription, setPetDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const pet = res.data
                setPetName(pet.petName)
                setPetType(pet.petType)
                setPetDescription(pet.petDescription)
                setSkill1(pet.skill1)
                setSkill2(pet.skill2)
                setSkill3(pet.skill3)
            })
            .catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`,{petName,petType,petDescription,skill1,skill2,skill3})
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

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Pet Name</label>
                <input type="text" name="petName" value={petName} onChange={e=>setPetName(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label>Pet Type</label>
                <input type="text" name="petType" value={petType} onChange={e=>setPetType(e.target.value)} className="form-control"/>
            </div>
            <div>
                <label>Pet Description</label>
                <input type="text" name="petDescription" value={petDescription} onChange={e=>setPetDescription(e.target.value)} className="form-control"/>
            </div>
            <button className='btn btn-primary btn-block'>Add Pet</button>
        </form>
        <div>
            <label>Skill 1</label>
            <input type="text" name="skill1" value={skill1} onChange={e=>setSkill1(e.target.value)} className="form-control"/>
        </div>
        <div>
            <label>Skill 2</label>
            <input type="text" name="skill2" value={skill2} onChange={e=>setSkill2(e.target.value)} className="form-control"/>
        </div>
        <div>
            <label>Skill 3</label>
            <input type="text" name="skill3" value={skill3} onChange={e=>setSkill3(e.target.value)} className="form-control"/>
        </div>
        {
            errors.map((err, i) =>(
                <p style={{color:"red"}} key={i}>{err}</p>
            ))
        }
    </div>
  )
}

export default EditPet