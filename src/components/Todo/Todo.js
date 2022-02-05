import React from 'react';

import { useState} from 'react'

const Todo =() => {



  
  const [input, setInput] = useState('')

  const [todos, setTodos] = useState([
    {id:'todo1', title:'watching tv', type:'danh'},
    {id:'todo2', title:'Doing homework', type:'danh'},
    {id:'todo3', title:'Reading book', type:'dai'},
    {id:'todo4', title:'Have lunch', type:'dai'}
  ])

  const handleClick = () => {
    if(input){
      let newTodo = {
        id:Math.floor((Math.random() * 100)+1), 
        title:input, 
        type:'dai'
      }
      setTodos([...todos,newTodo])
      setInput('')

    }
   
  }

  const handleDeleteTodo = (id)=>{
    let newTodos = todos
     newTodos = newTodos.filter(item => item.id !== id)
     setTodos(newTodos)
  }



   

    return (

        <div className="todos__container">
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={() =>handleClick()}>Add</button>
            <hr />
            
            <div className="title" style={{color:'red', fontSize:'20px'}}>
                {/* {title} */}
            </div>
            {
                todos.map((todo)=>(
                  <ul key={todo.id}>
                    <li>
                        {todo.title} : {todo.type} 
                        <span onClick={() =>{handleDeleteTodo(todo.id)}}>  X</span>
                    </li>
                  </ul>
                ))
            }
        </div>

    )
}





export default Todo;
