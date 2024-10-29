import React, { useState,useEffect } from "react";

export default function MyComponent6(){
     const [count, setCount] = useState(0);

     useEffect(() => {
        document.title = `Count: ${count}`;
     })

     function addCount(){
        setCount(c => c + 1);
     }

    return(<>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        </>
    );
}