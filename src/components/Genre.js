import React from 'react'
import {Link} from "@reach/router"

const Genre = (props) => {
    return (
       <Link to='/genre'> 
            <li onClick={() => props.genreClick(props.genre)}>
                <p>{props.genre}</p>
            </li>
        </Link>
    )
}

export default Genre