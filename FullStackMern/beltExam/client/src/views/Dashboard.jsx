import React, {useEffect, useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [pets, setPets] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => setPets(res.data))
            .catch(err => console.log(err))
    },[])

  return (
    <div>
        <div>
            <h1>Pet Shelter</h1>
            <Link to="/pets/new">New Pet</Link>
        </div>
        {
            pets?
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((pet, i) => (
                                <tr key={i}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link to={`/pets/show/${pet._id}`}>Details</Link></td>
                                    <td><Link className='btn btn-success' to={`/pets/edit/${pet._id}`}>Edit</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>:
                <h1>error</h1>
        }
    </div>
  )
}

export default Dashboard