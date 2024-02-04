import React from "react";
import { useState } from "react";
import Food from "./Food";
const FoodList = () =>{
    const [food,setFood] = useState([
        {
            src:"https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Focassia",
            desc:"Bread with italian olive oil and rosemary",
            stock:"8"
        },
        {
            src:"https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Pizza Margherita",
            desc:"Tomatto and mozarella",
            stock:"10"
        },
        {
            src:"https://img.freepik.com/free-photo/steamy-slice-pizza-with-stringy-cheese-fresh-toppings-is-lifted-high_91128-4668.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Pizza Spinaci",
            desc:"Tomatto ,Mozarella,spinach and ricotta cheese",
            stock:"8"
        },
        {
            src:"https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Pizza funghi",
            desc:"Tomatto, mozarella ,mushroooms and onion",
            stock:"8"
        },
        {
            src:"https://img.freepik.com/free-photo/pizza-with-salami-mozzarella-cheese-wooden-board_384344-5272.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Pizza Salamino",
            desc:"Tomatto, mozarella and pepperoni",
            stock:"0"
        },
        {
            src:"https://img.freepik.com/premium-photo/delicious-pizza-floating-air-generative-ai_808510-499.jpg?size=626&ext=jpg&ga=GA1.1.1747264972.1701097682&semt=sph",
            title:"Pizza Proscuito",
            desc:"Tomatto, mozarella ham, aragula and burrata cheese",
            stock:"18"
        }
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