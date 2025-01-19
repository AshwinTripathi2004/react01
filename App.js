/**
 * <div = "parent">
 *   <div id = "child">
 *          <h1> i am hear </h1>
 *    </div>
 * </div>
 */
import React from "react";
import ReactDOM from "react-dom/client";

//react.create element is at the end of day is object after we render  it will become htmlelement(render)
// const heading = React.createElement("h1",{id:"heading"},"Namaste React");

// jsx code =
// transpile before it goes to the jsx enigne and it is done by parcel - babel
// jsx

/***
 * header
 *  -logo
 *  -nav items
 * body
 *  -search
 *  -RestaurantContainer
 *    RestaurantCard
 *     Img
 *     Name of Res, START rATING , CUSISING ETC.
 * 
 * footer
 *  -Copyright
 *  -Links
 *  -Address
 *   Contact
 */
// const Title = () => (
// <h1 className="head" tabIndex="5" >
//     Namste bhai log</h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
//         <Title/>
//      <h1 className="heading">Namste bhai function components</h1>
//     </div>
// );
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" 
                src="https://icon-library.com/images/food-app-icon/food-app-icon-5.jpg"/>
            </div>
            <div className="nav-items">
               <ul>
                 <li>home</li>
                 <li>About us</li>
                 <li>Contact</li>
                 <li>Card</li>
               </ul>
            </div>
            
        </div>
    );
};

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


const Body = () => {
    return(
        <div className="body">
           <div className="search">Search</div>
           <div className="res-container">
               <RestaurantCard
                resName = "Meghna Foods"
                cuisine = "Biryani, North Indian, Asian"
                />
            
               <RestaurantCard
                 resName = "KFC"
                 cuisine = "Burgur, Fast Food"
               />
               
               

           </div>
           
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