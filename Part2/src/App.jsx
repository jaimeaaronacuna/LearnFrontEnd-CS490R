import Header from "./components/Header";
import Counter from "./components/Counter";
import {useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>My Tasks</h1>

      <TaskForm addTask={addTask} />

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}

export default App;