import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskProvider.jsx";

const TasksPage = () => {
  const { tasks, loadTasks } = useTask();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No task yet</h1>;

    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div className="pt-20 flex flex-col gap-4">
      <h1 className="text-5xl text-white font-bold text-center">Clients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
};

export default TasksPage;
