import React from 'react';

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = e => {
        this.setState({
            titleJob: e.target.value
        })
    }
    handleChangeSalary = e => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('>>>> Check data input:', this.state)
    }
    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's Title</label><br/>
                <input 
                    type="text" 
                    value={this.state.titleJob}
                    onChange={e => this.handleChangeTitleJob(e)}
                /><br/>
                <label htmlFor="lname">Salary</label><br/>
                <input 
                    type="text" 
                    value={this.state.salary}
                    onChange={e => this.handleChangeSalary(e)}
                /><br/>
                <input 
                    type="submit" 
                    value="Submit"
                    onClick={(e) => this.handleSubmit(e)}
                    />
            </form> 
        )
    }
}

export default AddComponent