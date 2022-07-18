import React from 'react'

const TodoList = ({todoList,isEdit,setIsEdit,update,setUpdate,setTodoTitle,setTodoList}) => {
  const editHandler=(id)=>{
    const edittodo = todoList.find(item=>item.id===id)
    setIsEdit(true)
    setUpdate(edittodo)
    setTodoTitle(edittodo.title)

    
  }

  const deleteHandler=(id)=>{
   const deleteTodo = todoList.filter(item=>item.id!==id)
   setTodoList(deleteTodo)
  }
  return (
    <div>
      <ul>
        {todoList?.map((item)=>(
          <li>{item.title} <button onClick={()=>editHandler(item.id)}>Edit</button> <button onClick={()=>deleteHandler(item.id)}>Delete</button></li>
        ))}
      </ul>
      
    </div>
  )
}

export default TodoList