import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
