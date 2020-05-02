import React from 'react';

const Item = (props) => {
    return (
        <a href={props.href} className={`block px-2 py-1 text-white font-semibold hover:bg-gray-700 rounded sm:mt-0 sm:ml-2 ${props.classes}`}>
            {props.body}
        </a>
    )
}

export default Item;