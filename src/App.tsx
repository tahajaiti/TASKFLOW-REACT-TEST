import { useState, useEffect } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import AddModal from "./components/AddModal";
import { TaskType } from "./components/TaskCard";

import taskData from './tasks.json';

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addTask = (task: Omit<TaskType, "id">) => {
    const newTask = { id: tasks.length + 1, ...task };
    setTasks((prev) => [...prev, newTask]);
  }

  useEffect(() => {
    setTasks(taskData);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && <AddModal isOpen={isOpen} onClose={handleOpen} addHandler={addTask}/>}
      <Navbar handle={handleOpen} />
      <Search />
      <Container tasks={tasks} />
    </>
  );
};

export default App;

