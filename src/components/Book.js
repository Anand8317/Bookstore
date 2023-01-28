import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const { title, author } = props;

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Delete</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};