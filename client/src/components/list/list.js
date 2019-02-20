import React from "react";
import "../list/list.css";

function List(props) {
  console.log(props)
  return (
    <div className="listHolder" key={props.data._id}>
      <img src={props.data.cover} className="listImg" alt={props._id}></img>
      <h2>{props.data.name}</h2>
      <p className="listDescription">Description: {props.data.summary}</p>
      <div className="countdownTimer"> {props.data.releaseDate[1]} </div>
      {props.data._id ? <button onClick={() => props.handleDelete(props.data._id)}>Delete</button> : <></>}
    </div>
  )

}

export default List;