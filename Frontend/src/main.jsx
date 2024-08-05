import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { StudentProvider } from './context/students.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StudentProvider>
       <App />
    </StudentProvider>
)
