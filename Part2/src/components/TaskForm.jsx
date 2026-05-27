import {useState} from "react";

function TaskForm({addTask}) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(input);
        setInput("");
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input
                value = {input}
                onCHange = {(e) => setInput(e.target.value)}
                placeholder = "Enter task"
            />
            <button type = "submit">Add</button>
        </form>
    );
}

export default TaskForm;