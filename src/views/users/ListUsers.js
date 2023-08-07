import React from 'react'
import axios from 'axios';
import './ListUsers.scss'
import { useState, useEffect } from 'react'
import { useNavigate  } from 'react-router-dom'

function ListUsers () {
    let [listUsers, setListUsers] = useState([])
    let navigate = useNavigate();

    let handleDetailUser = (user) => {
        navigate(`/user/${user.id}`);
    }
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=1')
        .then(res => {
            setListUsers(res && res.data && res.data.data ? res.data.data : [])
        })
    }, [])

    return (
        <div className='list-user-container'>
            <div className='title'>
                Fetch all list User
            </div>
            <div className='list-user-content'>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div className='child' 
                                key={item.id}
                                onClick={() => handleDetailUser(item)}
                            >
                                {index + 1} - {item.first_name} - {item.last_name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default ListUsers