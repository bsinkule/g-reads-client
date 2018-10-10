import React from 'react'
import {Link} from "@reach/router"

const Author = (props) => {
    return (
        <Link to='/author'> 
            <li onClick={() => props.selectId(props.id)}>
                <p>{props.first} {props.last}</p>
            </li>
        </Link>
    )
}

export default Author