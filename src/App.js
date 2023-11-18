import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () =>{
   return (

    <div id="app">
        <Header />
        <Body/>
    </div>

)
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


//35:28 time of video