import React from 'react'
import "../../global.css"
import styles from "./Posts.module.css"

const Posts = (props) => {
    return (
        <article
            className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/82168386?v=4" />
                    <div>
                        <strong>{props.author}</strong>
                        <span>{props.function}</span>
                    </div>
                </div>
                <time dateTime='2022-05-22 08:56:00'>
                    publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>teste1</p>
                <p>teste1</p>
                <p><a href="#">teste1</a></p>
                <p><a href="#">teste1</a></p>
            </div>
        </article>
    )
}

export default Posts