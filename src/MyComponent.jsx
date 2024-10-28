import React, {useState} from 'react';

export default function MyComponent() {

    const [name,setName] = useState("Guest");
    const [age,setAge] = useState();

    const updateName = () => {
        setName("Ethan");
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Update Age</button>
    </div>);
}