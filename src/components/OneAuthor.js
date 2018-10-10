import React from 'react'
import { Link } from "@reach/router"
import OneOneAuthor from './OneOneAuthor'

class OneAuthor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
      }

    render() {
        if(this.props.author.length > 0){

            let oneAuthor = this.props.author.filter(author => {
                return author.id === this.props.getId
            })

            let books = this.props.data.filter(book => {
                return book.portrait === oneAuthor[0].portrait
            }) 

            let booksMap = books.map(each => {
                return <OneOneAuthor cover={each.cover}
                                        title={each.title} 
                                        id={each.id}
                                        selectBookId={this.props.selectBookId}
                                        />
            })
            return (
                <div>
                    <div className="one">
                        <Link to='/'><button className="formButton">Back to All Books and Authors</button></Link>
                        <img className="imgWidth" src={oneAuthor[0].portrait} alt="Author"/>
                        <h3>{oneAuthor[0].first} {oneAuthor[0].last}</h3>
                        <p>{oneAuthor[0].biography}</p>
                        <div className="cta"></div>
                        <h3>Books Authored</h3>
                        <div className="row">{booksMap}</div>
                    </div>

                </div>
            )
        } else {return <div>Not Yet</div>}
    }   
}

export default OneAuthor