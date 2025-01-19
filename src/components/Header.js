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

export default Header;