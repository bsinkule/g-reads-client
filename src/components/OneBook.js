import React from 'react'
import { Link } from "@reach/router"
import AddAuthorForm from './AddAuthorForm'
import DeleteAuthorForm from './DeleteAuthorForm'
import OneOneBook from './OneOneBook';

class OneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addForm: false,
            delForm: false
        }
      }

    newShowAddForm = () => {
        const tog = !this.state.addForm
        this.setState({
            addForm: tog
        })
    }

    showDelForm = () => {
        const tog = !this.state.delForm
        this.setState({
            delForm: tog
        })
    }


    render() {
        if(this.props.book.length > 0){

            let oneBook = this.props.book.filter(book => {
                return book.id === this.props.bookId
            })

            let authors = this.props.data.filter(author => {
                return author.id === this.props.bookId
            })

            let authorMap = authors.map(each => {
                return <OneOneBook first={each.first} 
                                last={each.last}
                                id={each.author_id}
                                getId={this.props.getId}
                                selectId={this.props.selectId}
                                
                                />
            })

            return (
                <div className="height">
                    <div className="one">
                        <Link to='/'><button className="formButton">Back to All Books and Authors</button></Link>
                        <img className="imgWidth" src={oneBook[0].cover} alt="Book Cover"/>
                        <h2>{oneBook[0].title}</h2>
                        <h4>Genre: {oneBook[0].genre}</h4>
                        <p>{oneBook[0].description}</p>
                        <h4>Author(s)</h4>
                        <ul className="listing2">{authorMap}</ul>
                        <div className="cta">
                            <button className="formButton" onClick={this.newShowAddForm}>Add an Author to this Book</button>
                            <button className="formButton" onClick={this.showDelForm}>Remove an Author</button>
                        </div>
                    </div>
                    {this.state.addForm ? <AddAuthorForm bookId={this.props.bookId} join={this.props.join} getId={this.props.getId} loadData={this.props.loadData} book={this.props.book} author={this.props.author} data={this.props.data}/> : null}
                    {this.state.delForm ? <DeleteAuthorForm bookId={this.props.bookId} getId={this.props.getId} loadData={this.props.loadData} book={this.props.book} author={this.props.author} data={this.props.data}/> : null}
                </div>
            )
        } else {return <div>Not yet</div>}
    }
}

export default OneBook