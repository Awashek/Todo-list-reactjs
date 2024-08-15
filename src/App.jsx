import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  const [todos,setTodos] = useState([])
  const[todoValue, setTodoValue] = useState('')

  function persistData(newData) {
    localStorage.setItem('todos', JSON.stringify({todos:
      newData
    }))
  }

  function handleAddTodos (newTodos) {
    const newTodoList = [...todos, newTodos]
    setTodos(newTodoList)
  }

  function handelDeleteTodo (index) {
    const newTodoList = todos.filter((todo,todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handelEditTodo (index) {
    const valueToBeChanged = todos[index]
    setTodoValue(valueToBeChanged)
    handelDeleteTodo(index)
  }

  useEffect(()=>{
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localStorage) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
      <>
        <TodoInput todoValue={todoValue}
         handleAddTodos={handleAddTodos}
         setTodoValue={setTodoValue}/>
        <TodoList 
        handelEditTodo={handelEditTodo}
        handelDeleteTodo={handelDeleteTodo} 
        todos={todos}/>
      </>
  )
}

export default App
