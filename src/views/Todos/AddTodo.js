import React from 'react'
import './ListTodo.scss'
import { toast } from 'react-toastify';


class AddTodo extends React.Component {

    state = {
        title: ''
    }

    handleOnchangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleClickAddTodo = () => {
        if (!this.state.title) {
            toast.error("Missing required title")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10),
            title: this.state.title
        }
        this.props.handleAddTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {

        let {title} = this.state

        return (
            <div className='add-todo'>
                <input type="text" value={title}
                    onChange={(e) => this.handleOnchangeTitle(e)}
                />
                <button type="button" className='add'
                    onClick={() => this.handleClickAddTodo()}
                >
                    Add               
                </button>
            </div>
        )
    }
}

export default AddTodo