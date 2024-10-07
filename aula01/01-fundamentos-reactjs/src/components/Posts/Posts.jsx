import React, { useState } from 'react'
import "../../global.css"
import styles from "./Posts.module.css"
import Comment from '../Comment/Comment'
import Avatar from '../Avatar/Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const Posts = ({ author, role, avatarImage, publishedAt, content }) => {

    const [commentList, setCommentList] = useState(['Post muito legal!'])
    const [newComment, setNewComment] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const relativeHourRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const onSubmit = e => {
        e.preventDefault()
        if (newComment == '') {
            alert('O campo comentario, não pode ser vazio')
            return;
        }
        setCommentList([...commentList, newComment])
        setNewComment('')
    }

    return (
        <article
            className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <Avatar src={avatarImage} />
                    <div className={styles.authorInfo}>
                        <strong>{role}</strong>
                        <span>{author}</span>
                    </div>
                </div>
                <time title={publishedDateFormated} time={publishedAt.toISOString()}>
                    {relativeHourRelativeNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((text, index) => {
                    return <p key={index}>{text.type == 'paragraph' ? `${text.content}` : <a href="#">{text.content}</a>}</p>
                })}
            </div>

            <hr />

            <form onSubmit={onSubmit} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    id="comment-field"
                    onChange={(e) => setNewComment(e.target.value)}
                    value={newComment}
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {commentList.map(comment => {
                    return <Comment content={comment} key={comment} />
                })}
            </div>

        </article>
    )
}

export default Posts