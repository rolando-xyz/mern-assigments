import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Character = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState()

    // useEffect(() => {
    //     axios.get(`http swapi.dev/api/planets/1/`)
    //         .then(res=>{
    //             console.log(res.data)
    //         })
    //         .catch(err=>console.log(err))
    // },[])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/3`)
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    },[])

  return (
    <fieldset>
        <legend> Character.jsx </legend>
    </fieldset>
  )
}

export default Character