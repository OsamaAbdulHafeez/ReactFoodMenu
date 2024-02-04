import React from "react";

export const Food = ({ fooddetails }) => {
    return (
        <>
            <div className="food">
                <div className="foodImg">
                    <img src={fooddetails.src} alt="Example" />
                </div>
                <div className="fooddetails">
                    <div className="fooddescription">
                        <h3>{fooddetails.title}</h3>
                        <p>{fooddetails.desc}</p>
                    </div>
                    <div className="stock">
                        <p>{fooddetails.stock==0?"Sold Out":fooddetails.stock}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Food