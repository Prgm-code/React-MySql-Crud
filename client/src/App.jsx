import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import { TaskContextProvider } from "./context/TaskContext";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />

            <Route path="about" element={<h1>About</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
