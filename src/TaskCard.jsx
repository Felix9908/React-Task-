import { useContext, useState } from "react";
import { TaskContext } from "./Context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask, editDescription, setEditDescription } = useContext(TaskContext);
  const [activeUpdate, setActiveUpdate] = useState(null);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      {activeUpdate == task.id ? (
        <>
          <input
            type="text"
            className="text-black"
            placeholder="editar comentario"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </>
      ) : (
        <>
          <p className="text-gray-300 text-sm">{task.description}</p>
        </>
      )}
      {activeUpdate ? (
        <>
          <button
            className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400"
            onClick={() => {
              updateTask({ id: task.id, newDescription: editDescription });
              setActiveUpdate(null);
            }}
          >
            Guardar
          </button>
          <button
            className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
            onClick={() => setActiveUpdate(null)}
          >
            Cancelar
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
            onClick={() => deleteTask(task.id)}
          >
            Eliminar Tarea
          </button>
          <button
            className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:bg-blue-400"
            onClick={() => setActiveUpdate(task.id)}
          >
            Editar Tarea
          </button>
        </>
      )}
    </div>
  );
}

export default TaskCard;
