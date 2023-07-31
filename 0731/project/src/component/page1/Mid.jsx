import M from "./M";
import { useState } from "react";
const Mid = () => {
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    };
    const decrement = () => {
        setCount(count-1);
    };

    return <div>
        <h1>
            count
        </h1>
        <p>
            目前count: {count}
        </p>
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>減少</button>
    </div>
}