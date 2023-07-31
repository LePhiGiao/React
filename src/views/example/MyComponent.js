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
    deleteJob = (job) => {
        let currentJobs = this.state.jobs
        let newJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            jobs: newJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('prevState', prevState, '>>>> current State', this.state)
    }

    componentDidMount() {
        console.log('>>>> Run Component did Mouse')
    }

    render() {
        console.log('>>>> Call Render')
        return (
            <>
                <AddComponent 
                    addNewJob = {this.addNewJob}
                />               
                <ChildComponent 
                    jobs={this.state.jobs}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}
export default MyComponent