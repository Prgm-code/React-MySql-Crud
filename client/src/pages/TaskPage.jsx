import { useEffect } from "react";

import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TaskPage() {
  const { tasks, loadTask } = useTasks();

  useEffect(() => {
    loadTask();
  }, []);
  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks</h1>;
    } else {
      return tasks.map((task) => <TaskCard key={task.id} {...task} />);
    }
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid gap-3 grid-cols-3">
        {renderMain()}
      </div>
    </div>
  );
}

export default TaskPage;
