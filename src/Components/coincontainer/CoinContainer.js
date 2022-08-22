import React, { useState } from "react";
import {choice} from "./helper";
import Coin from "../coin/coin"

function CoinContainer(props){

    const [currCoin,setCurrCoin] = useState(null);
    const [nFlips,setNFlips]     = useState(0);
    const [nHeads,setHeads]      = useState(0);
    const [nTails,setTails]      = useState(0);

    function flipCoin(){
        const newCoin = choice(props.coins);
        setCurrCoin(newCoin);
        setNFlips(prevValue => prevValue+1);

        // if(newCoin.side === "heads"){
        //     setHeads(prevValue => prevValue+1);
        // }else{
        //     setTails(prevValue => prevValue+1);
        // }

        setHeads(prevValue => prevValue + (newCoin.side === "heads" ? 1 : 0));
        setTails(prevValue => prevValue + (newCoin.side === "tails" ? 1 : 0));
    }

    function handlerClick(e){
        flipCoin();
    }

    return (
        <div className="CoinContainer">
            <h2>Lets Flip A Coin!</h2>
            {currCoin && <Coin info={currCoin} />}
            <button onClick={handlerClick} >Flip me!</button>
            <p>Out of {nFlips} flips, there have been {nHeads}{" "}heads and {nTails} tails.</p>
        </div>
    );
}

CoinContainer.defaultProps = {
    coins: [
        { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
        { side: "tails", imgSrc: "images/tails.jpg"}
    ]
}

export default CoinContainer;