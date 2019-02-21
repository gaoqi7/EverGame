import React from "react";
import "../construction/construction.css";
import lvl from "../construction/lvl.gif"

function Construction() {

    return (

        <div className="constructionDiv">

            <div className="construction">
            
                Uh oh, you're not strong enough to take on this content. Come back when you
            
            </div>

            <img src={lvl} alt="" className="lvl"></img>

        </div>
    )

}

export default Construction