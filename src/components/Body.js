import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

    // Local state varibale - supar powerful variable
    const [listOfRestaurants] = useState([
        
    ]);
    
    //Normal js varibale;
    // let listOfRestaurants = [];


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
export default Body;

