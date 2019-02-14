import React from 'react';

function Genre(props) {
    return <>
        {props.genreList.map((elem) => { return <p className ="mt-0 mb-0" key={elem.id}>{elem.name}</p> })}
    </>

}

export default Genre;