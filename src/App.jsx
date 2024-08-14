import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
  const [todos,setTodos] = useState([])
  const[todoValue, setTodoValue] = useState('')

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
