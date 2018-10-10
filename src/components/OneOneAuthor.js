import React from 'react'
import {Link} from "@reach/router"

const OneOneAuthor = (props) => {
    return (
        <Link to='/book'> 
            <div onClick={() => props.selectBookId(props.id)} className="borderSmallBooks">
                <div className="smallCoverContainer">
                    <img className="smallCover" src={props.cover} alt={props.title}/>
                </div>
                <div>{props.title}</div>
            </div>
        </Link>
    )
}

export default OneOneAuthor