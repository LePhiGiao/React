import React from 'react'

class ChildComponent extends React.Component {

    render() {
        console.log(">>>>> Check data: ", this.props )
        let { name, age } = this.props
        return (
            <>
                <div>CHILD COMPONENT: {name} - {age}</div>
            </>
        )
    }
}
export default ChildComponent