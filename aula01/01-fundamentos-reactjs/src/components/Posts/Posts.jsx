import React from 'react'
import "../../global.css"
import styles from "./Posts.module.css"
import Comment from '../Comment/Comment'
import Avatar from '../Avatar/Avatar'

const Posts = (props) => {
    return (
        <article
            className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/82168386?v=4" />
                    <div className={styles.authorInfo}>
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

            <hr />

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}

export default Posts