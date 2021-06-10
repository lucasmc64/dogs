import React from "react";

import useFetch from "../../../../Hooks/useFetch";

import { COMMENT_POST } from "../../../../api";

import Error from "../../../Helper/Error";

import { ReactComponent as Enviar } from "../../../../Assets/enviar.svg";

import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");

  const { error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${single ? styles.single : ""}`}
    >
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ currentTarget: { value } }) => setComment(value)}
        className={styles.textarea}
      />

      <button className={styles.button}>
        <Enviar />
      </button>

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
