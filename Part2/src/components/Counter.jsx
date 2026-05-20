import { useState } from "react";
import Button from "./Button";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <Button text="Increment" onClick={() => setCount(count + 1)} />
        </div>
    );
}

export default Counter;