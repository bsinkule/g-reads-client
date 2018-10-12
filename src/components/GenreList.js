import React from 'react'
import { Link } from "@reach/router"

class GenreList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }

    render() {

        const genreFilter = this.props.book.filter(gen => {
            return gen.genre === this.props.genre
        })

        const genreBookList = genreFilter.map(books => {
            return (
                <li>
                    <Link to='/book'><img onClick={() => this.props.selectBookId(books.id)} className="resp" src={books.cover} alt={books.title}/></Link>
                    <div className="body">
                        <h2>{books.title}</h2>
                        <h4>Genre: {books.genre}</h4>
                    </div>
                </li>
            )
        })

            return (
                <div>
                    <Link to='/'><button className="formButton">Back to All Books and Authors</button></Link>
                    <ul className="listing">
                        {genreBookList}
                    </ul>
                </div>
            )
    }   
}

export default GenreList