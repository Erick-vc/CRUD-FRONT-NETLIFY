import { useTask } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  // ? Eliminar un cliente
  const confirmedDeleteClient = () => {
    Swal.fire({
      title: "¿Delet client?",
      text: "This action can not be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Delete",
      concaelButtonText: "No, Cancel",
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          deleteTask(task.id)
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4 flex flex-col gap-4">
      <header className="flex justify-between gap-x-4">
        <h2 className="text-xl font-bold">{task.name} {task.last_name}</h2>
        <span className="flex items-center">{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-base text-yellow-500">{task.email}</p>
      <span className="text-cyan-500">{task.createAt}</span>
      <div
      className="flex flex-wrap gap-2 items-center justify-center sm:justify-between">
        <button
          type="button"
          className="bg-red-500 font-bold w-full sm:w-auto md:w-20 lg:w-auto xl:w-24 2xl:w-32 h-8 px-2 py-1 text-white"
          onClick={() => confirmedDeleteClient()}>
          Delete
        </button>
        <button
          className="bg-blue-500 font-bold w-full sm:w-16 md:w-20 lg:w-20 xl:w-24 2xl:w-32 h-8 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${task.id}`)}>
          Edit
        </button>
        <button
          className="bg-green-500 font-bold w-full sm:w-auto md:w-32 lg:w-auto xl:w-32 2xl:w-32 h-8 px-2 py-1 text-white"
          onClick={() => handleDone(task.done)}>
          Toggle Client
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
