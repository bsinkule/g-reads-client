import React from 'react'
import Book from './Book'
import Author from './Author'
import Genre from './Genre'

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
                            key={book.id}
                            selectBookId={this.props.selectBookId}
                            />
        })

        const authors = this.props.author.map(author => {
            return <Author   first={author.first}
                            last={author.last}
                            id={author.id}
                            key={author.id}
                            selectId={this.props.selectId}
                            />
        })

        const filterGenre = this.props.book.map(genre => {
            return genre.genre
        })

        const removeDup = (arr) => {
            let uniqueArr = []
            for (let i in arr) {
                if(uniqueArr.indexOf(arr[i]) === -1) {
                    uniqueArr.push(arr[i])
                }
            }
            return uniqueArr
        }

        const go = removeDup(filterGenre)

        const genreMap = go.map((genre) => {
            return  <Genre genre={genre} 
                            genreClick={this.props.genreClick}/>
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
                <h3 className="sideP">Genres</h3>
                <ul className="listing2">
                    {genreMap}
                </ul>
                <h3 className="sideP">Total Books & Authors</h3>
                <ul className="listing2">
                    <li>Number of Authors:  {this.props.author.length}</li>
                    <li>Number of Books:  {this.props.book.length}</li>
                </ul>
            </div>
        )
    }   
}

export default Side