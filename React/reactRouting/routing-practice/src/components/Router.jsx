import React from 'react'
import { useParams } from 'react-router-dom'

const Router = () => {
    const {keyword} = useParams()
    
    return (
        <fieldset>
            <legend>Router.jsx</legend>
            <h1> You searched for {keyword}</h1>
        </fieldset>
    )
}

export default Router