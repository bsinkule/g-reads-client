import React from 'react'
import { Link } from '@reach/router'

const SearchResultBook = (props) => {
    if(props.title.length > 0 && typeof props.title === 'object') {
        const bookMap = props.title.map(att => {
            return (
                <li key={att.id}>
                    <Link to='/book'><img onClick={() => props.selectBookId(att.id)} className="resp" src={att.cover} alt={att.title}/></Link>
                    <div className="body">
                        <h2>{att.title}</h2>
                        <h4>Genre: {att.genre}</h4>
                    </div>
                    <div className="cta">
                    </div>
                </li>
                )
         })

        return (
            <div>
                <h2 className="message">Book titles that meet your search</h2>
                <ul className="listing">
                    {bookMap}
                </ul>
            </div>
        )
    } else {return (
        <ul className="listing">
            <li className="pad">
                No Books for this search.
                <br/>
                <br/>
                You may enter part of the title or the exact title for your search.
            </li>
        </ul>
    ) 
    }
}

export default SearchResultBook