import React from "react";
import "./coin.css"

function Coin(props){
    return (
        <div className="Coin">
            <img src={props.info.imgSrc} alt={props.info.side}></img>
        </div>
    );
}


export default Coin;