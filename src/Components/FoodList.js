import React from "react";
import { useState } from "react";
import Food from "./Food";
const FoodList = () =>{
    const [food,setFood] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
    ])
    return(
        <>
        <div className="main">
        {food.map((foo)=>(
            <Food fooddetails={foo}/>
        ))}
        </div>
        </>
    )
}

export default FoodList