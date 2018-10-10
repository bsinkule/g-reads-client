import React from 'react'
import Book from './Book'
import Author from './Author'

class Side extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
      }

    render() {
        const books = this.props.book.map(book => {
            return <Book    title={book.title}
                            id={book.id}
                            // selectId={this.props.selectId}
                            selectBookId={this.props.selectBookId}
                            />
        })

        const authors = this.props.author.map(author => {
            return <Author   first={author.first}
                            last={author.last}
                            id={author.id}
                            selectId={this.props.selectId}
                            />
        })
   
        return (
            <div className="center">
                <img className="sideBookImg" src="https://image.flaticon.com/icons/png/128/182/182321.png" alt="movie clip"/>
                <h3 className="sideP">Books</h3>
                <ul className="listing2">
                    {books}
                </ul>
                <h3 className="sideP">Authors</h3>
                <ul className="listing2">
                    {authors}
                </ul>
            </div>
        )
    }
}

export default Side