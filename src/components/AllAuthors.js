import React from 'react'
import { Link } from "@reach/router"
import UpdateAuthor from './UpdateAuthor'

class AllAuthors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authForm: false
        }
    }

    showUpdateForm = () => {
        const tog = !this.state.authForm
        this.setState({
            authForm: tog
        })
    }

    render() {
        return (
            <li>
                <Link to='/author'><img onClick={() => this.props.selectId(this.props.id)} className="resp" src={this.props.portrait} alt="Author"/></Link>
                <div className="body">
                    <h3>{this.props.first} {this.props.last}</h3>
                </div>
                <div className="cta">
                    <button className="addRemoveButton2" onClick={this.showUpdateForm}>Update Author Info</button>
                    <button className="addRemoveButton2" onClick={() => this.props.deleteAuthor(this.props.id)}>Delete Author</button>
                </div>
                {this.state.authForm ? <UpdateAuthor first={this.props.first} last={this.props.last} biography={this.props.biography} portrait={this.props.portrait} loadAuthors={this.props.loadAuthors} id={this.props.id}/> : null}    
            </li>
        )
    }
}

export default AllAuthors

