import { useState } from 'react'

interface TodoFormProps {
  onAddTodo: (text: string, selectedColor?: string) => void
  availableColors: string[]
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo, availableColors }) => {
  const [text, setText] = useState('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      onAddTodo(text.trim(), selectedColor || undefined)
      setText('')
      setSelectedColor('')
      setShowColorPicker(false)
    }
  }

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
    setShowColorPicker(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="todo-input" className="block text-sm font-medium text-gray-700 mb-2">
          Add a new task
        </label>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="input-field"
          autoFocus
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Choose color (optional)
          </label>
          <button
            type="button"
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            {showColorPicker ? 'Hide' : 'Show'} colors
          </button>
        </div>
        
        {showColorPicker && (
          <div className="color-picker">
            {availableColors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => handleColorSelect(color)}
                className={`color-option ${color} ${selectedColor === color ? 'selected' : ''}`}
                title={color.charAt(0).toUpperCase() + color.slice(1)}
              />
            ))}
          </div>
        )}
        
        {selectedColor && (
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Selected:</span>
            <div className={`w-4 h-4 rounded-full color-option ${selectedColor}`} />
            <button
              type="button"
              onClick={() => setSelectedColor('')}
              className="text-sm text-gray-500 hover:text-red-500"
            >
              Clear
            </button>
          </div>
        )}
      </div>
      
      <button
        type="submit"
        disabled={!text.trim()}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add Task
      </button>
    </form>
  )
}

export default TodoForm 