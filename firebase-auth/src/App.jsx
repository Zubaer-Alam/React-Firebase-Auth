import React, {useState, useEffect} from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count}`;
    }, [count]);

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}
export default App;
