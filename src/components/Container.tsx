import Lane from "./Lane"
import { TaskType } from "./TaskCard";

interface contProp{
    tasks: TaskType[]
}


const Container = ({tasks}: contProp) => {

    const getTasks = (name: string) => {
        return tasks.filter((task) => task.status === name);
      };

    return (
        <div className="py-10 px-4 flex flex-col gap-4 lg:flex-row 2xl:overflow-hidden">
            <Lane name="todo" tasks={getTasks("todo")} />
            <Lane name="doing" tasks={getTasks("doing")} />
            <Lane name="done" tasks={getTasks("done")} />
        </div>
    )
}

export default Container