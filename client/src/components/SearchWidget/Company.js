import React from 'react';

function Company(props) {
    return <p className="mt-0 mb-0">
        {props.company.company.name}
    </p>

}

export default Company;