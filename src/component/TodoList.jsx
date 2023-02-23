import React from 'react'

const TodoList = ({todoList,onCheckBtnClick,handleDelete}) => {
    
  return (
    <div>
    {todoList.map((todo)=>(
        <div className='productlist' key={todo.id} >
            <input type="checkbox"onClick={() => onCheckBtnClick(todo.id)}/>
            <label className={(todo.isCompleted)?"label":""}>{todo.name}</label>
            <button className={todo.isCompleted?"hide":"deck"} onClick={() => handleDelete(todo.id)} >DELETE</button>
        </div>  
    ))}          
    </div>  
  )
}

export default TodoList