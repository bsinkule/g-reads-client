import React from 'react'
import { Link } from "@reach/router"

const authorUrl = 'https://g-reads-server.herokuapp.com/author/'

class AddAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first: '',
            last: '',
            biography: '',
            portrait: ''
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

        fetch(authorUrl, options)
            .then(res => res.json())
            .then(() => {
                this.props.loadAuthors()
        })

        this.setState({
            first: '',
            last: '',
            biography: '',
            portrait: ''
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
                            <label>First Name:
                                <input className="inputAdd" type="text" name="first" value={this.state.first} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label>Last Name:
                                <input className="inputAdd" type="text" name="last" value={this.state.last} onChange={this.handleChange} required/>
                            </label>
                        </div>
                        <div>
                            <label>Biography:
                                <textarea className="inputAdd" type="text" name="biography" value={this.state.biography} onChange={this.handleChange} rows="6" cols="30" required></textarea>
                            </label>
                        </div>
                        <div>
                            <label>Portrait Image URL:
                                <input className="inputAdd" type="text" name="portrait" value={this.state.portrait} onChange={this.handleChange} required/>
                            </label>
                        </div>
                    <button className="addRemoveButton" type="submit">Add Author</button>
                </form>
                <Link to='/'><button className="formButton cent">Back to All Books and Authors</button></Link>
            </div>
        )
    }
}

export default AddAuthor