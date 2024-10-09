import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { useState } from "react";
import Avatar from "../Avatar/Avatar.tsx";

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}

const Comment = ({ content, deleteComment }: CommentProps) => {
  const [countsLike, setCountsLike] = useState(0);

  const handleDeleteComment = () => {
    deleteComment(content);
  };

  const handleLikeComment = () => {
    setCountsLike(countsLike + 1);
  };

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
            <button title="Deletar comentário">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir <span>{countsLike}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
