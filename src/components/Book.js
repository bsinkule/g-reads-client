import React from 'react'
import {Link} from "@reach/router"

const Book = (props) => {
    return (
       <Link to='/book'> 
            <li onClick={() => props.selectBookId(props.id)} >
                <p>{props.title}</p>
            </li>
        </Link>
    )
}

export default Book