import React from 'react';
import './ListTodo.scss'
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: '1', title: 'Doing homework' },
            { id: '2', title: 'Learn React' },
            { id: '3', title: 'Learn Node' },
        ]
    }
    handleAddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }

    render() {
        let { listTodos } = this.state

        return (
            <div className='list-todo-container'>
                <AddTodo 
                    handleAddTodo = {this.handleAddTodo}
                />
                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 && 
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button className='edit'>Edit</button>
                                    <button className='delete'>Delete</button>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }
}

export default ListTodo;