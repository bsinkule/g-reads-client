import React from 'react'

const authorUrl = 'https://g-reads-server.herokuapp.com/author/'

class UpdateAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first: this.props.first,
            last: this.props.last,
            biography: this.props.biography,
            portrait: this.props.portrait
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

        fetch(authorUrl + this.props.id, options)
            .then(res => {
                return res.json()
            })
            .then(() => {
                this.props.loadAuthors()
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
                        <label>First Name:
                            <input className="inputUpdate" type="text" name="first" value={this.state.first} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Last Name:
                            <input className="inputUpdate" type="text" name="last" value={this.state.last} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>Biography:
                            <textarea className="inputUpdate" type="text" name="biography" value={this.state.biography} onChange={this.handleChange} rows="7" cols="25"></textarea>
                        </label>
                    </div>
                    <div>
                        <label>Portrait Image URL:
                            <input className="inputUpdate" type="text" name="portrait" value={this.state.portrait} onChange={this.handleChange}/>
                        </label>
                    </div>
                <button className="addRemoveButton" type="submit">Update Author Info</button>
            </form>
        )
    }
}

export default UpdateAuthor