import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const id = setTimeout(() => {
            navigate('/')
        }, 3000)

        return () => clearTimeout(id)
    })
    return (
        <div>NotFound please wait and return to the home page</div>
    )
}

export default NotFound