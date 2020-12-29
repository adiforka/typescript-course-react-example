import React, { useState } from "react"
import TodoList from "./components/TodoList"
import NewTodo from "./components/NewTodo"
import Todo from "./model/todo.model"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  // { id: "t1", text: "Finish the course, bro" },
  // { id: "t2", text: "Finish wanking, dude" },

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ])
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  )
}

export default App
