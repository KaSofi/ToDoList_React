import { Component } from "react";


export class ToDoList extends Component {
    state = {
        userInput: '',
        todolist: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
    }
    onSubmitForm(e) {
        e.preventDefault();
    }
    addItem(input) {
        if(input === '') {
            alert('Please, create a new todo')
        }else {
            let todolist = this.state.todolist;
            todolist.push(input);
            this.setState({todolist: todolist, userInput:''})
        }
    }
    onClickDelete(item) {
        let deleteItem = this.state.todolist;
        deleteItem.splice(item);
        this.setState({todolist: deleteItem})
    }


    render() {
        return <form onSubmit={this.onSubmitForm}> 
            <div className="container">
            <div className="center">
                <h1>REACT TODO APP</h1>
            </div> 
            <div className="center inputtogether">
                <input type='text'
                placeholder="Create a new todo"
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}
                />
                <button onClick={() => this.addItem(this.state.userInput)} className='addButton'>ADD</button>
                </div>

                <ul>
                    {this.state.todolist.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={()=> this.onClickDelete(item)} className="delButton">DELETE</button>
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    }
}