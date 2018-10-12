import React from 'react'
import { Link } from "@reach/router"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <form className="positionForm3 maxWidth"> 
                    <div>
                        <label>Search by Author Last Name:
                            <input className="inputAdd" type="text" name="last" value={this.props.last} onChange={this.props.handleChange} required/>
                        </label>
                    </div>
                    <Link to="/authorsearchresult"><button onClick={() => {this.props.saveLastInput(); this.props.fetchAuthSearch()}} className="addRemoveButton">Search Author</button></Link>
                </form>
                <form className="positionForm3 maxWidth">                     
                    <div>
                        <label>Search by Book Title:
                            <input className="inputAdd" type="text" name="title" value={this.props.title} onChange={this.props.handleChange} required/>
                        </label>
                    </div>
                    <Link to="/booksearchresult"><button onClick={() => {this.props.saveTitleInput(); this.props.fetchBookSearch()}} className="addRemoveButton">Search Book</button></Link>
                </form>
                <Link to='/'><button className="formButton cent">Back to All Books and Authors</button></Link>
            </div>
        )
    }
}

export default Search