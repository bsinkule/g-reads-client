import React from 'react'
import { Link } from "@reach/router"

const bookUrl = 'https://g-reads-server.herokuapp.com/book/'

class AddBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            genre: '',
            description: '',
            cover: ''
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

        fetch(bookUrl, options)
            .then(res => res.json())
            .then(() => {
                this.props.loadBooks()
        })

        this.setState({
            title: '',
            genre: '',
            description: '',
            cover: ''
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

        return (
            <div>
                <form className="positionForm3 maxWidth" onSubmit={this.postData}> 
                        <div>
                            <label>Title:
                                <input className="inputAdd" type="text" name="title" value={this.state.title} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label>Genre:
                                <input className="inputAdd" type="text" name="genre" value={this.state.genre} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label>Description:
                                <textarea className="inputAdd" type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="6" cols="30" required></textarea>
                            </label>
                        </div>
                        <div>
                            <label>Cover Image URL:
                                <input className="inputAdd" type="text" name="cover" value={this.state.cover} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <button className="addRemoveButton" type="submit">Add Book</button>
                </form>
                <Link to='/'><button className="formButton cent">Back to All Books and Authors</button></Link>
            </div>
        )
    }
}

export default AddBook