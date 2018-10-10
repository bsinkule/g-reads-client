import React from 'react'
import SelectNewAuthor from './SelectNewAuthor'

const delJoin = 'https://g-reads-server.herokuapp.com/authorbook/'

class DeleteAuthorForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            join: [],
            author_id: '',
            book_id: (this.props.book.filter(book => {
                return book.id === this.props.bookId
            }))[0].id
        }
    }

    componentDidMount = () => {
        fetch(delJoin)
        .then(response => response.json())
        .then(data => {
          this.setState({
            join: data.data
          })
        })
    }

    deleteJoin = (book, auth) => {
        const options = {
          method: 'DELETE',
          headers: new Headers({
              'content-type': 'application/json'
          })
        }
    
        fetch(delJoin + book + '/' + auth, options)
            .then(res => {
                return res.json()
            })
            .then(() => {
                const oldData = this.state.join
                const newData = oldData.filter(joyn => {
                  return !(book === joyn.book_id && auth === joyn.author_id)
                })
                this.setState({
                  join: newData
                })
            })
            .then(() => {
                this.props.loadData()
            })
            .then(() => {
                fetch(delJoin)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    join: data.data
                  })
                })
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

        const authors = this.props.author.map(author => {
            return <SelectNewAuthor   first={author.first}
                                    last={author.last}
                                    id={author.id}
                                    />
        })

        return (
            <form className="positionForm2" onSubmit={(e) => {this.deleteJoin(this.state.book_id, this.state.author_id); e.preventDefault();}}> 
                    <div>
                        <label>
                            Select Author to Remove
                        
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
                <button className="addRemoveButton" type="submit">Click to Remove</button>
            </form>
        )
    }
}

export default DeleteAuthorForm