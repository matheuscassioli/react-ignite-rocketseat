import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

import React from 'react'
import Avatar from "../Avatar/Avatar"

const Comment = ({ content }) => {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://avatars.githubusercontent.com/u/82168386?v=4"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Cassioli</strong>
                            <time>Cerca de 20m atrás</time>
                        </div>
                        <button>
                            <Trash size={24} />
                        </button>

                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24} />  Aplaudir <span></span>20
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default Comment