import React from 'react'
import TodoCard from './TodoCard'
export default function TodoList() {

  let todos = [
    'Start Coding',
    'Go to the gym',
    'Eat your veggies',
  ]

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
