import React from 'react'
import SelectNewAuthor from './SelectNewAuthor'

const addNew = 'https://g-reads-server.herokuapp.com/authorbook/'

class AddAuthorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author_id: '',
            book_id: (this.props.book.filter(book => {
                return book.id === this.props.bookId
            }))[0].id
        }
    }

    postData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)
        const options = {
            method: 'POST',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(addNew, options)
            .then(res => res.json())
            .then(() => {
                this.props.loadData()
            })
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    render() {
        console.log("Author - ", this.state.author_id)
        console.log("Book - ", this.state.book_id)
        console.log("JoinStuff - ", this.props.join)

        const authors = this.props.author.map(author => {
            return <SelectNewAuthor   first={author.first}
                                    last={author.last}
                                    id={author.id}
                                    />
        })

        return (
            <form className="positionForm" onSubmit={this.postData}> 
                    <div>
                        <label>
                            Select Author to Add
                        
                            <select name="author_id" value={this.state.author_id} onChange={this.handleChange}>
                                <option>Select Name:</option>
                                {authors}
                            </select>
                        </label>
                    </div>
                    <div className="hidden">
                        <label>Book ID:
                            <input className="inputAdd" type="text" name="book_id" value={this.state.book_id} onChange={this.handleChange}/>
                        </label>
                    </div>
                <button className="addRemoveButton" type="submit">Click to Add Author</button>
            </form>
        )
    }
}

export default AddAuthorForm