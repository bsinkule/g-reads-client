import React from 'react'

const bookUrl = 'https://g-reads-server.herokuapp.com/book/'

class UpdateBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            genre: this.props.genre,
            description: this.props.description,
            cover: this.props.cover
        }
    }

    putData = (e) => {
        e.preventDefault()
        const body = JSON.stringify(this.state)

        const options = {
            method: 'PUT',
            body: body,
            headers: new Headers({
                'content-type': 'application/json'
            })
        }

        fetch(bookUrl + this.props.id, options)
            .then(res => {
                return res.json()
            })
            .then(() => {
                this.props.loadBooks()
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
            <form className="positionForm3 updateForm" onSubmit={this.putData}  > 
                    <div>
                        <label>Title:
                            <input className="inputUpdate" type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Genre:
                            <input className="inputUpdate" type="text" name="genre" value={this.state.genre} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Description:
                            <textarea className="inputUpdate" type="text" name="description" value={this.state.description} onChange={this.handleChange} rows="7" cols="25"></textarea>
                        </label>
                    </div>
                    <div>
                        <label>Cover Image URL:
                            <input className="inputUpdate" type="text" name="cover" value={this.state.cover} onChange={this.handleChange}/>
                        </label>
                    </div>
                <button className="formButton" type="submit">Update Book</button>
            </form>
        )
    }
}

export default UpdateBook