import TodoItem from './TodoItem'
import { Todo } from '../App'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onChangeColor: (id: string, newColor: string) => void
  availableColors: string[]
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onChangeColor, availableColors }) => {
  if (todos.length === 0) {
    return null
  }

  return (
    <div className="post-it-grid">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onChangeColor={onChangeColor}
          availableColors={availableColors}
        />
      ))}
    </div>
  )
}

export default TodoList 