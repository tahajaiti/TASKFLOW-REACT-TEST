import { useEffect, useState } from "react"
import TaskType from "./types/TaskType";


const App = () => {
  const [test, setTest] = useState<TaskType[]>([]);
  
  useEffect(() => {
    fetch('http://localhost:6969/tasks', {method: 'GET'})
      .then((res) => res.json())
      .then((data) => {
        setTest(data)
      })
  }, []);

  console.log(test);

  return (
    <div className="text-5xl">
      {test.map((task) => (
        <div key={task._id}>
          {task.title}
          {task.description}
        </div>
      ))}

      <button onClick={() => setTest([])}>BUTTON</button>
    </div>
  )
}

export default App