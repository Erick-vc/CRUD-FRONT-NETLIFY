import { Route, Routes } from "react-router-dom";
import { TaskContextProvider } from "./context/TaskProvider";

// TODO: Importamos los componentes
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="container mx-auto py-4 px-5 lg:px-10 xl:px-20">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TasksForm />} />
            <Route path="/edit/:id" element={<TasksForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
