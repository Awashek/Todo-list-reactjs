import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList(props) {
  const {todos, handelDeleteTodo} = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard {...props} key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
