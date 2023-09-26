import React, {useState} from 'react'
import Todo from './Todo'


const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])
    
    const handleChange = e => setTodo({[e.target.name]: e.target.value})

    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo caja de texto no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }
    
       return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Tarea: </label><br />
                <input type="text" name="todo" onChange={handleChange}/>
                <button onClick={handleClick}>agregar</button>
            </form>
            {
               todos.map((value, index) => (
                <Todo todo={value.todo}/>
             ))
             
            }
        </>
    )
    
    
}

export default Form