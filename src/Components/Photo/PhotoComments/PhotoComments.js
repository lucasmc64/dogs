import React from "react";

import { UserContext } from "../../../Contexts/UserContext";

import PhotoCommentsForm from "./PhotoCommentsForm/PhotoCommentsForm";

import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);

  const { login } = React.useContext(UserContext);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
        ref={commentsSection}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};

export default PhotoComments;
