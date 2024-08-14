import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  const [todos,setTodos] = useState([
   
  ])

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

  }

  return (
      <>
        <TodoInput handleAddTodos={handleAddTodos}/>
        <TodoList handelDeleteTodo={handelDeleteTodo} todos={todos}/>
      </>
  )
}

export default App
