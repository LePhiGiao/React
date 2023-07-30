import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
    state = {
        jobs: [
            {id: '1', title: 'Developer', salary: '$500'},
            {id: '2', title: 'Tester', salary: '$300'},
            {id: '3', title: 'Project Mangager', salary: '$1000'},
        ]
    }
    addNewJob = (job) => {
        console.log('Check in Parent: ', job)
        this.setState({
            jobs: [...this.state.jobs, job]
        })
    }

    render() {
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />               
                <ChildComponent 
                    jobs={this.state.jobs}
                />
            </>
        )
    }
}
export default MyComponent