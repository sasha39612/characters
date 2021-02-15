import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NewCommentForm } from '../NewCommentForm/NewCommentForm';

import './CommentsForm.scss';

export const CommentsForm = ({ characterId }) => {
  const [comments, setComments] = useState([]);
  const [isVisble, setIsVisble] = useState(false);


  const commentAdd = (newComment) => {
    setComments([...comments, newComment]);
  };

  const commentDelete = (commentToRemove) => {
    let newArrayOfComments = comments.filter(comment => comment.id !== commentToRemove)
   
    setComments(newArrayOfComments)
  };

  return (
    <div className="сommentsForm">
      <h2>Comments details:</h2>

      <section className="сommentsForm__comments">
        <button
          type="button"
          className="button"
          onClick={() => setIsVisble(!isVisble)}
        >
          {isVisble ? 'Hide comments' : 'Show comments'}
        </button>

        {isVisble && (
          <ul className="сommentsForm__list">
            {comments.map(comment => (
              <li
                className="сommentsForm__list-item"
                key={comment.id}
              >
                <button
                  type="button"
                  className="сommentsForm__remove-button button"
                  onClick={() => commentDelete(comment.id)}
                >
                  X
                </button>
                <p>{comment.text}</p>
              </li>
            ))}
          </ul>
        )}

      </section>

      <section>
        <div className="сommentsForm__form-wrapper">
          <NewCommentForm
            onAdd={commentAdd}
            characterId={characterId}
          />
        </div>
      </section>
    </div>
  );
};

CommentsForm.propTypes = {
  characterId: PropTypes.string.isRequired,
};
