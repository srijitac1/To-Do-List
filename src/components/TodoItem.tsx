import React, { useState } from 'react'
import { Todo } from '../App'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onChangeColor: (id: string, newColor: string) => void
  availableColors: string[]
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onChangeColor, availableColors }) => {
  const [showColorPicker, setShowColorPicker] = useState(false)

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date))
  }

  const handleColorChange = (newColor: string) => {
    onChangeColor(todo.id, newColor)
    setShowColorPicker(false)
  }

  return (
    <div className={`post-it-note ${todo.color} ${todo.completed ? 'completed' : ''} animate-slide-up relative`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1 min-w-0">
          <button
            onClick={() => onToggle(todo.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-1 flex-shrink-0 ${
              todo.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-400 hover:border-gray-600 bg-white'
            }`}
          >
            {todo.completed && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="flex-1 min-w-0">
            <p className={`text-gray-800 transition-all duration-200 font-medium leading-relaxed ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}>
              {todo.text}
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">
              {formatDate(todo.createdAt)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 flex-shrink-0">
          {/* Color picker button */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              title="Change color"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
            
            {showColorPicker && (
              <div className="absolute right-0 top-8 z-10 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[200px]">
                <div className="text-xs font-medium text-gray-700 mb-2 text-center">Change Color</div>
                <div className="grid grid-cols-5 gap-1">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(color)}
                      className={`color-option ${color} ${todo.color === color ? 'selected' : ''}`}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Delete button */}
          <button
            onClick={() => onDelete(todo.id)}
            className="p-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
            title="Delete task"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Click outside to close color picker */}
      {showColorPicker && (
        <div 
          className="fixed inset-0 z-5" 
          onClick={() => setShowColorPicker(false)}
        />
      )}
    </div>
  )
}

export default TodoItem 