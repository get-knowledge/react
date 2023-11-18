import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header render");
    //console.log("Header render");

 //if no depency array then useEffect called every render
 //if depency array then useEffect called just one at intail time   
useEffect(()=>{

})

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
     );
    };

    export default Header;