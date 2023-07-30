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
                                    {item.title} - {item.salary}
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