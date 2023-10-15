const heading = React.createElement("h1",{} ,"Hello world from React! ");

const parent = React.createElement("div",{id:"mainDiv"} ,[
                React.createElement("div",{id:"child"},[
                    React.createElement("h1",{id:"h1"},"I am H1 Tags !"),
                    React.createElement("h2",{id:"h2"},"I am H2 Tags !")
                ])
                
]);


const root = ReactDOM.createRoot(document.getElementById("root"));    
root.render(heading);
root.render(parent);