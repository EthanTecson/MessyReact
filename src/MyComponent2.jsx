import React, {useState} from "react"

export default function MyComponent2() {

    const [name, setName] = useState("")
    const [shipping,setShipping] = useState("")

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleShipping(event){
        setShipping(event.target.value);
    }

    return(<>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <label>
            <input type = "radio" value="Pick Up"
                    checked={shipping === "Pick Up"}
                    onChange={handleShipping}/>
            Pick Up
        </label> <br/>
        <label>
            <input type = "radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShipping}/>
                    Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </>)
}