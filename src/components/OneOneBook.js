import React from 'react'
import {Link} from "@reach/router"

const OneOneBook = (props) => {
    return (
        <Link to='/author'> 
            <li onClick={() => props.selectId(props.id)}>
                <p>{props.first} {props.last}</p>
            </li>
        </Link>
    )
}

export default OneOneBook