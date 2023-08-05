import React from 'react'
import MakeColor from '../HOC/MakeColor'

class Home extends React.Component {

    render() {
        console.log('>>>>> Check props', this.props)
        return (
            <div>HOME PAGE</div>
        )
    }
}

export default MakeColor(Home)