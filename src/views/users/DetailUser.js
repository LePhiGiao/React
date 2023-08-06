/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from 'axios';
import { redirect } from "react-router-dom";


class DetailUser extends React.Component {
    state = {
        user: {}
    } 
    async componentDidMount() {
        if (window.location.href.split('/')[4]) {
            let userId = window.location.href.split('/')[4]
            await axios.get(`https://reqres.in/api/users/${userId}`)
            .then(res => {  
                this.setState({
                    user: res && res.data && res.data.data ? res.data.data : {}
                })
            })
        }   
    }
    handleBackButton = () => {
        console.log('Click')
        redirect("/user");
    }
    render() {
        let { user } = this.state
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
                        <button type='button' onClick={() => this.handleBackButton()}>Back</button>
                    </div>
                </>}
            </>
        )
    }
    
}

export default DetailUser