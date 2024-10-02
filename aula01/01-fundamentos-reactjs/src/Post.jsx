import React from 'react'
import "./global.css"

const Post = (props) => {
    return (
        <div>
            <p>Autor: <strong>{props.author}</strong></p>
            <p>Mensagem: {props.message}</p>
        </div>
    )
}

export default Post