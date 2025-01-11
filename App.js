/**
 * <div = "parent">
 *   <div id = "child">
 *          <h1> i am hear </h1>
 *    </div>
 * </div>
 */

const parent = React.createElement("div", {id: "parent"},
        [
                React.createElement("div",{ id: "child"},
                        [
                React.createElement("h1",{},"i am from h1"), 
                        React.createElement("h2", {}, "I'am an h2"),
                ]),
                React.createElement("div", {id : "child2"},[
                        React.createElement("h1", {}, "I'am an h1 tag"),
                        React.createElement("h2", {}, "I'am from h2 tag"),
                ]),
        ]);
        
        console.log(parent);
        //jsx

        const root = ReactDOM.createRoot(document.getElementById("header"));



        root.render(parent);