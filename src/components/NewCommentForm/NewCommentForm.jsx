import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCommentForm.scss';

export const NewCommentForm = ({ onAdd, characterId }) => {
  const [text, setText] = useState('');

  const addCommentForm = (event) => {
    event.preventDefault();

    const newComment = {
      text,
      id: +new Date(),
      characterId,
    };

    onAdd(newComment);

    setText('');
  };


  return (
    <form
      className="NewCommentForm"
      onSubmit={addCommentForm}
    >
     
      <div className="form-field">
        <textarea
          name="text"
          placeholder="Type comment here"
          className="NewCommentForm__input"
          required
          value={text}
          onChange={(event => setText(event.target.value))}
        />
      </div>

      <button
        type="submit"
        className="NewCommentForm__submit-button button"
      >
        Add a comment
      </button>
    </form>
  );
};

NewCommentForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  characterName: PropTypes.string,
};

NewCommentForm.defaultProps = {
  postId: '',
};