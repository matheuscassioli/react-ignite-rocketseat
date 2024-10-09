import { FormEvent, useState } from "react";
import "../../global.css";
import styles from "./Posts.module.css";
import Comment from "../Comment/Comment";
import Avatar from "../Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Author {
  avatarImage: string;
  name: string;
  role: string;
}

export interface Post {
  id: number;
  author: Author;  
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: Post;
}

const Posts = ({ post }: PostProps) => {
  const [commentList, setCommentList] = useState(["Post muito legal!"]);
  const [newComment, setNewComment] = useState("");

  const publishedDateFormated = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const relativeHourRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newComment == "") {
      alert("O campo comentario, não pode ser vazio");
      return;
    }
    setCommentList([newComment, ...commentList]);
    setNewComment("");
  };

  const deleteComment = (newComment: string) => {
    const newListCommentsAfterRemoveCurrentComment = commentList.filter(
      (comment) => {
        return newComment !== comment;
      }
    );
    setCommentList(newListCommentsAfterRemoveCurrentComment);
  };

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.posts}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarImage} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated}>{relativeHourRelativeNow}</time>
      </header>

      <div className={styles.content}>
        {post.content &&
          post.content.map((text, index) => {
            return (
              <p key={index}>
                {text.type == "paragraph" ? (
                  `${text.content}`
                ) : (
                  <a href="#">{text.content}</a>
                )}
              </p>
            );
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
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {commentList.map((comment) => {
          return (
            <Comment
              deleteComment={deleteComment}
              content={comment}
              key={comment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Posts;
