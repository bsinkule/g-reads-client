import React from 'react'

const SelectNewAuthor = (props) => {
    return (
            <option value={props.id}>
                {props.first} {props.last}
            </option>
    )
}

export default SelectNewAuthor