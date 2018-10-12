import React from 'react'
import { Link } from '@reach/router'

const SearchResultAuthor = (props) => {

    if(props.last.length > 0 && typeof props.last === 'object') {
        const authorMap = props.last.map(att => {
            return (
                <li key={att.id}>
                    <Link to='/author'><img onClick={() => props.selectId(att.id)} className="resp" src={att.portrait} alt="Author"/></Link>
                    <div className="body">
                        <h3>{att.first} {att.last}</h3>
                    </div>
                    <div className="cta">
                    </div>
                </li>
                )
         })

        return (
            <div>
                <h2 className="message">Authors that meet your search</h2>
                <ul className="listing">
                    {authorMap}
                </ul>
            </div>
        )
    } else {return (
        <ul className="listing">
            <li className="pad">
                No Authors for this search.
                <br/>
                <br/>
                You may enter part of the last name or the last name exactly.
            </li>
        </ul>
    ) 
    }
}

export default SearchResultAuthor