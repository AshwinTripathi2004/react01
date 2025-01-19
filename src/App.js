
import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";

const RestaurantCard = (props) => {
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className="res-logo" 
            alt="res-logo" src="https://tse4.mm.bing.net/th?id=OIP.vSKc5K5M0vfWPoxgK-c0yAHaE8&pid=Api&P=0&h=180"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine     }</h4>
            <h4>4.4 star</h4>
            <h4>38 minutes</h4>
        </div>
    );
};





const AppLayout = () => {
    return (
        <div className="app">
             <Header/>
             <Body/>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);