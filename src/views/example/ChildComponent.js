import React from 'react'

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log(job)
        this.props.deleteJob(job)
    }

    render() {
        console.log(">>>>> Check data: ", this.props )
        let { jobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ? 
                    <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                :
                <>
                    <div className='job-list'>
                        {jobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} &nbsp; 
                                    <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                </div>
                            )
                        })}
                    </div>
                    <div><button onClick={() => this.handleShowHide()}>Hide</button></div>               
                </>}
            </>
        )
    }
}
export default ChildComponent