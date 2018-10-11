import React, { Component } from 'react'
import './App.css'
import { Router } from '@reach/router'

import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import OneAuthor from './components/OneAuthor'
import OneBook from './components/OneBook'
import Side from './components/Side'
import AddBook from './components/AddBook'
import AddAuthor from './components/AddAuthor'
import GenreList from './components/GenreList'

const apiUrl = 'https://g-reads-server.herokuapp.com/author/'
const bookUrl = 'https://g-reads-server.herokuapp.com/book/justbooks/'
const authorUrl = 'https://g-reads-server.herokuapp.com/author/justauthors/'
const join = 'https://g-reads-server.herokuapp.com/authorbook/'
const delBook = 'https://g-reads-server.herokuapp.com/book/'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      book: [],
      author: [],
      join: [],
      getId: 1,
      bookId: 1,
      genre: 'JavaScript'
    }
  }

  loadData = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data,
        })
      })
  }

  loadBooks = () => {
    fetch(bookUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        book: data.data,
      })
    }) 
  }

  loadAuthors = () => {
    fetch(authorUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({
        author: data.data,
      })
    }) 
  }

  componentDidMount = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.data,
        })
      })

      fetch(bookUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          book: data.data,
        })
      })

      fetch(authorUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({
            author: data.data
            })
        })

      fetch(join)
        .then(response => response.json())
        .then(data => {
          this.setState({
            join: data.data
          })
        })
  }

  deleteBook = (id) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({
          'content-type': 'application/json'
      })
    }

    fetch(delBook + id, options)
        .then(res => {
            return res.json()
        })
        .then(() => {
            const oldData = this.state.book
            const newData = oldData.filter(item => {
              return !(id === item.id)
            })
            this.setState({
              book: newData
            })
        })
        .then(() => {
          this.loadData()
      })
  }

  deleteAuthor = (id) => {
    const options = {
      method: 'DELETE',
      headers: new Headers({
          'content-type': 'application/json'
      })
    }

    fetch(apiUrl + id, options)
        .then(res => {
            return res.json()
        })
        .then(() => {
            const oldData = this.state.author
            const newData = oldData.filter(item => {
              return !(id === item.id)
            })
            this.setState({
              author: newData
            })
        })
        .then(() => {
          this.loadData()
      })
  }

  selectId = (id) => {
    this.setState({
      getId: id
    })
  }

  selectBookId = (id) => {
    this.setState({
      bookId: id
    })
  }

  genreClick = (type) =>{
      this.setState({
          genre: type
        })
  }

  render() {
    return (
      <div className="App">
        <div className="Header b"><Header /></div>
        <div className="Nav"> <Nav /></div>
        <div className="Main ">
          <Router >
            <GenreList path='genre' selectBookId={this.selectBookId} book={this.state.book} genre={this.state.genre}/>
            <AddAuthor path='addauthor' loadAuthors={this.loadAuthors} />
            <AddBook path='addbook' loadBooks={this.loadBooks} />
            <OneBook path='book'selectBookId={this.selectBookId} bookId={this.state.bookId} join={this.state.join} loadData={this.loadData} selectId={this.selectId} book={this.state.book} getId={this.state.getId} data={this.state.data} author={this.state.author} />
            <OneAuthor path='author' selectBookId={this.selectBookId} author={this.state.author} getId={this.state.getId} data={this.state.data} />
            <Main path='/' loadData={this.loadData} selectBookId={this.selectBookId} deleteAuthor={this.deleteAuthor} deleteBook={this.deleteBook} loadAuthors={this.loadAuthors} selectId={this.selectId} author={this.state.author} book={this.state.book} data={this.state.data} getId={this.state.getId} loadBooks={this.loadBooks}/>
          </Router>
        </div>
        <div className="Side b"><Side genreClick={this.genreClick} selectBookId={this.selectBookId} author={this.state.author} book={this.state.book} data={this.state.data} selectId={this.selectId} getId={this.state.getId}/></div>
      </div>
    )
  }
}

export default App;
