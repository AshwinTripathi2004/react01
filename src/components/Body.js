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
export default Body;