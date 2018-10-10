import React from 'react'
import AllBooks from './AllBooks'
import AllAuthors from './AllAuthors'

const Main = (props) => {
    const books = props.book.map(book => {
       return <AllBooks    cover={book.cover}
                            title={book.title}
                            genre={book.genre}
                            description={book.description}
                            id={book.id}
                            selectBookId={props.selectBookId}
                            loadBooks={props.loadBooks}
                            deleteBook={props.deleteBook}
                            />
    })

    const authors = props.author.map(author => {
       return <AllAuthors    portrait={author.portrait}
                            first={author.first}
                            last={author.last}
                            biography={author.biography}
                            id={author.id}
                            selectId={props.selectId}
                            loadAuthors={props.loadAuthors}
                            deleteAuthor={props.deleteAuthor}
                            />
    })

    return (
        <ul className="listing">
            {books} {authors}
        </ul>
    )
}

export default Main