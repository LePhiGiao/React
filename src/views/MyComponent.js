import React from 'react'

class MyComponent extends React.Component {
    state = {
        name: 'Eric'
    }

    handleClickButton = () => {
        alert('click me')
    }
    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    } 

    render() {
        return (
            <>
                <div className='second'>
                    <input value={this.state.name} type='text' onChange={e => this.handleOnChange(e)}/>
                    <div>My name is {this.state.name}</div>
                </div>
                <div className='first'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}
export default MyComponent