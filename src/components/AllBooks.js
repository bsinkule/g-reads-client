import React from 'react'
import { Link } from "@reach/router"
import UpdateBook from './UpdateBook'

class AllBooks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upForm: false
        }
    }

    newShowUpdateForm = () => {
        const tog = !this.state.upForm
        this.setState({
            upForm: tog
        })
    }

    render() {
        return (
            <li>
                <Link to='/book'><img onClick={() => this.props.selectBookId(this.props.id)} className="resp" src={this.props.cover} alt={this.props.title}/></Link>
                <div className="body">
                    <h2>{this.props.title}</h2>
                    <h4>Genre: {this.props.genre}</h4>
                </div>
                <div className="cta">
                    <button className="addRemoveButton2" onClick={this.newShowUpdateForm}>Update Book Info</button>
                    <button className="addRemoveButton2" onClick={() => this.props.deleteBook(this.props.id)}>Delete Book</button>
                </div>
                {this.state.upForm ? <UpdateBook loadData={this.props.loadData} title={this.props.title} genre={this.props.genre} description={this.props.description} cover={this.props.cover} loadBooks={this.props.loadBooks} id={this.props.id}/> : null}    
            </li>
        )
    }
}

export default AllBooks

