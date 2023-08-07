/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom'
import { useState, useEffect } from 'react'

function DetailUser () {
    let { id } = useParams()
    let navigate = useNavigate();
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => {  
            setUser(res && res.data && res.data.data ? res.data.data : {})     
        })
    }, [id])

    const handleBackButton = () => {
        navigate("/user");
    }
    let isEmptyObj = Object.keys(user).length === 0;
    return (
        <>
            <div>HELLO DETAIL USER</div>
            {isEmptyObj === false && 
            <>
                <div>User's name: {user.first_name} - {user.last_name}</div>
                <div>User's email: {user.last_name}</div>
                <div>
                    <img src={user.avatar}/>
                </div>
                <div>
                    <button type='button' onClick={() => handleBackButton()}>Back</button>
                </div>
            </>}
        </>
    )

    
}

export default DetailUser