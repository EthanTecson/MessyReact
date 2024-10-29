import React, { useState} from 'react';

export default function MyComponent3(){
    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    
    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}))
    }


    function handleMakeChange(event){
        return;
    }

    function handleModelChange(event){
        return;
    }


    return (<div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
    </div>);
}