import React from 'react'

const TodoForm = ({todoTitle,setTodoTitle,todoList,setTodoList,update,setIsEdit,setUpdate,isEdit}) => {
    const createHandler=(e)=>{
        e.preventDefault()
        const newTodo={
            id:Date.now(),
            title:todoTitle
        }
        setTodoList([newTodo,...todoList])
        setTodoTitle('')

    }

    const updateHandler=()=>{
        update.title = todoTitle
        setTodoTitle('')
        setIsEdit(false)
        setUpdate(null)


    }
  return (
    <div>
        <input type="text" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} />
        <button onClick={(e)=>isEdit===true?updateHandler():createHandler(e)}>{isEdit===true?'UpdateTodo':'AddTodo'}</button>
    </div>
  )
}

export default TodoForm