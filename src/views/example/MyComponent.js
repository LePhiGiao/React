import React from 'react'
import ChildComponent from './ChildComponent'

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = e => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleChangeLastName = e => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('>>>> Check data input:', this.state)
    }
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={e => this.handleChangeFirstName(e)}
                    /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={e => this.handleChangeLastName(e)}
                    /><br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(e) => this.handleSubmit(e)}
                    />
                </form> 
                <ChildComponent name="child-1" />
                <ChildComponent name="child-2"/>
                <ChildComponent name="child-3"/>
            </>
        )
    }
}
export default MyComponent