import React from 'react';

function ReleaseDate(props) {
    return <p className="mt-0">{props.date[props.date.length - 1].human}</p>
}

export default ReleaseDate