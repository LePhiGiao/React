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
        ],
        editTodo: {}
    }
    handleAddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!")
    }
    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete success!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmtyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodos.findIndex(item => item.id === todo.id)
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo success");
            return;
        }

        //Edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeEditTodo = e => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmtyObj = Object.keys(editTodo).length === 0 

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
                                    {isEmtyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                    : 
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - 
                                                <input 
                                                    value={editTodo.title}
                                                    onChange={e => this.handleOnchangeEditTodo(e)}
                                                />
                                            </span>
                                        :
                                        <span>{index + 1} - {item.title}</span>
                                        }
                                    
                                    </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmtyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >
                                        Delete
                                    </button>
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