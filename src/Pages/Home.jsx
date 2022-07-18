import React from 'react'
import { useState } from 'react'
import TodoForm from '../Components/TodoForm'
import TodoList from '../Components/TodoList'


const Home = () => {
    const[todoTitle,setTodoTitle]=useState('')
    const[todoList,setTodoList] = useState([])
    const[isEdit,setIsEdit]=useState(false)
    const[update,setUpdate]=useState(null)
  return (
    <div>
        <TodoForm todoTitle={todoTitle}
                  setTodoTitle={setTodoTitle}
                  todoList={todoList}
                  setTodoList={setTodoList}
                  update={update}
                  setIsEdit={setIsEdit}
                  setUpdate={setUpdate}
                  isEdit={isEdit}
            />

        <TodoList todoList={todoList}
        setTodoList={setTodoList}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        update={update}
        setUpdate={setUpdate}
        setTodoTitle={setTodoTitle}
        />
    </div>
  )
}

export default Home