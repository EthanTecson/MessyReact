import React, { useState } from 'react';

export default function MyComponent4() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(f => [...f,newFood])
    }

    function handleDeleteFood(index){
        setFoods(foods.filter((_,i) => i !== index));
    }

    return(<>
       <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleDeleteFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleFood}>Add Food</button> 
       </div> 
    </>);
}

