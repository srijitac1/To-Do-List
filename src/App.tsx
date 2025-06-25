import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Header from './components/Header'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
  color: string
}

const postItColors = [
  'yellow', 'pink', 'blue', 'purple', 'orange', 
  'green', 'red', 'teal', 'indigo', 'rose',
  'amber', 'emerald', 'cyan', 'violet', 'lime'
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string, selectedColor?: string) => {
    const color = selectedColor || postItColors[Math.floor(Math.random() * postItColors.length)]
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
      color
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const changeTodoColor = (id: string, newColor: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, color: newColor } : todo
    ))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 animate-fade-in">
          <TodoForm onAddTodo={addTodo} availableColors={postItColors} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Your Tasks ({totalCount})
            </h2>
            {completedCount > 0 && (
              <button
                onClick={clearCompleted}
                className="btn-secondary text-sm"
              >
                Clear Completed ({completedCount})
              </button>
            )}
          </div>
          
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onChangeColor={changeTodoColor}
            availableColors={postItColors}
          />
          
          {todos.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg">No tasks yet. Add one above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App 