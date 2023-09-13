import { useState } from "react"
import Task from "../task/Task"
import Input from "../input/Input"
import "./addTask.css"
function AddTask() {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    function handleChange(e) {
        setInputValue(e.target.value)
    }
    function handleTask() {
        console.log("button clicked");
        setTask((s) =>
            [...s, inputValue]
        )
    }
    console.log(task);
    function handleRemove(id) {
        setTask(
            (s) => s.filter((e, i) => {
                return i != id
            })
        )
    }
    return (
        <div id="main-div">
            <div className="task-adding-section">
                {/* <input onChange={handleChange} type="text" placeholder="Write your task" />
                {inputValue}
                <button onClick={handleTask}>Add</button> */}
                <Input click={handleTask} change={handleChange} val={inputValue}/>
            </div>
            <div className="parent-task">
                {task.map((e, i) =>
                    <Task remove={handleRemove} key={i} task={e} id={i} />
                )}
            </div>
        </div>
    )
}
export default AddTask