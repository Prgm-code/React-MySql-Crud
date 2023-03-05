import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskCard(task) {
  const { deleteTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const handleDone = (done, id) => {
    if (done == 1) {
      updateTask(id, { done: 0 });
    } else {
      updateTask(id, { done: 1 });
    }
  };
  return (
    <div className="bg-zinc-400 rounded-md p-4 ">
      <header className="flex justify-between">
        <h1 className="text-sm font-bold">{task.title}</h1>
        <span> {task.done == 1 ? "✅ " : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createdAt}</span>
     <div className="flex gap-x-1 justify-end">
     <button className="bg-slate-400 px-2 py-1 text-white" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
      <button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteTask(task.id)}>Delete</button>
      <button className="bg-green-500 px-2 py-1 text-white" onClick={() => handleDone(task.done, task.id)}>
        {task.done == 1 ? "Set Pending" : "Set as Done"}
      </button>
     </div>
    </div>
  );
}

export default TaskCard;
