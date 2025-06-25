# ✨ To Do List

A beautiful, responsive todo list application built with React, TypeScript, and Tailwind CSS. Features colorful post-it notes with a modern, intuitive interface.

![Todo List Demo](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?logo=vite)

## ✨ Features

- 🎨 **15 Beautiful Colors** - Choose from yellow, pink, blue, purple, orange, green, red, teal, indigo, rose, amber, emerald, cyan, violet, and lime
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎯 **Interactive Post-It Notes** - Hover effects and smooth animations
- 💾 **Persistent Storage** - Your todos are saved automatically using localStorage
- 🎨 **Color Picker** - Select colors when adding tasks or change existing ones
- ✨ **Modern UI** - Clean design with beautiful gradients and shadows
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Live Demo

[View Live Demo](https://srijitac1.github.io/To-Do-List)

## 🛠️ Tech Stack

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Vite** - Fast build tool and development server
- **LocalStorage** - Client-side data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/srijitac1/To-Do-List.git
   cd To-Do-List
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Adding Tasks
- Type your task in the input field
- Click "Show colors" to choose a color (optional)
- Press Enter or click "Add Task"
- If no color is selected, a random color will be assigned

### Managing Tasks
- **Complete Task**: Click the circular checkbox next to any task
- **Change Color**: Click the color wheel icon on any post-it note
- **Delete Task**: Click the trash icon on the right side of any task
- **Clear Completed**: Click "Clear Completed" to remove all finished tasks

### Color Management
- **15 Color Options**: Yellow, Pink, Blue, Purple, Orange, Green, Red, Teal, Indigo, Rose, Amber, Emerald, Cyan, Violet, Lime
- **Color Picker**: Available both when adding new tasks and editing existing ones
- **Visual Feedback**: Selected colors are highlighted in the picker

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # App header with title
│   ├── TodoForm.tsx    # Add new task form with color picker
│   ├── TodoList.tsx    # Grid layout for all todos
│   └── TodoItem.tsx    # Individual post-it note component
├── App.tsx             # Main app component with state management
├── main.tsx           # React app entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Post-It Aesthetics**: Paper-like texture with subtle patterns
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Smooth Animations**: Hover effects, transitions, and slide-up animations
- **Color-Coded System**: Left border colors match the post-it theme
- **Modern Typography**: Clean fonts with proper spacing and hierarchy

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Heroicons](https://heroicons.com/)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Srijita Chakraborty]
