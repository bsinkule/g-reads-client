import React from 'react'
import { Link } from "@reach/router"

const Nav = () => {
  
    return (
        <div className="nav">
            <div className="nav-head">
                <div className="nav-title">code books</div>
            </div>
            <input type="checkbox" id="nav-check"/>
            <div className="nav-links">
                <Link to='addbook'><p className="line">add book</p></Link>
                <Link to='addauthor'><p className="line">add author</p></Link>
            </div>
        </div>
    )
}

export default Nav