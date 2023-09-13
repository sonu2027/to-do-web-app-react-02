import "./input.css"
function Input(props) {
    return (
        <div id="task-input">
            <input onChange={props.change} type="text" placeholder="Write your task" />
            {/* {props.val} */}
            <button onClick={props.click}>Add</button>
        </div>
    )
}
export default Input