import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (!params.id) {
        return;
      }
      const task = await getTask(params.id);
      console.log(task);
      setTask({
        title: task.title,
        description: task.description,
      });
    };

    loadTask();
  }, []);

  return (
    <div className="">
     

      <Formik
        initialValues={task}
        enableReinitialize={true} // <--- This is important allow to update the form
        onSubmit={async (values, actions) => {
          if (params.id) {
            console.log ("Edit");
            await updateTask(params.id, values);
            navigate("/tasks");
          
          } else {
            console.log(values);
            await createTask(values);
            navigate("/tasks");
          }

          
          setTask({
            title: "",
            description: "",
          });

        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10">
             <h1 className="text-xl font-bold upercase text-center">{params.id ? "Edit Task" : "Create Task"}</h1>
            <label className="block">title</label>
            <input
            className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block">description</label>
            <textarea
            className="px-2 py-1 rounded-sm w-full"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            />
            <button
              className="block bg-slate-400 px-2 py-1 text-white rounded-sm w-full"
              type="submit"
              onSubmit={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
