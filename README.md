# Welcome to react

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File watching Algorithem - written in c++
- Caching -  Faster Building
- image optimization
- minification 
- Bundling
- compress
- consistent hashing
- code splitting
- Differential Bundling-support older broweres
- Error Handling
- Https
- tree-Shaking - remove unused code from
- Different div and prod bunduls

*react.create element is at the end of day is object after we render  it will become htmlelement(render)
 const heading = React.createElement("h1",{id:"heading"},"Namaste React");

 jsx code =
 transpile before it goes to the jsx enigne and it is done by parcel - babel
*jsx

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
 
 const Title = () => (
 <h1 className="head" tabIndex="5" >
     Namste bhai log</h1>
 );

const HeadingComponent = () => (
     <div id="container">
      <Title/     <h1 className="heading">Namste bhai function components</h1>
  </div>
);


Two type of Export/Import

-default export/import
export default Components
import Components from "path";

-Named Export/Import

Export const component;
import {Component} from "path";