import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBook } from '../redux/books/books';
import '../style/BookItem.css';

const BookItem = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;

  const percentage = 65;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="my-5 p-5 border">
      <div className="left-side">
        <h4 className="category">{category}</h4>
        <h3 className="title">{title}</h3>
        <h4 className="author">{author}</h4>
        <div className="option-buttons">
          <button type="button">Comments</button>
          <button type="button" onClick={removeHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="right-side">
        <div className="book-progress">
          <div className="circle">
            <CircularProgressbar
              value={percentage}
              styles={{
                path: {
                  stroke: `rgb(2, 144, 255,${percentage / 100})`,
                },
              }}
            />
          </div>
          <div className="percentage">
            {`${percentage}%`}
            <span className="completed">Completed</span>
          </div>
        </div>

        <div className="book-chapters">
          <h4 className="current-chapter">Current Chapter</h4>
          <h3 className="chapter">Chapter 17</h3>
          <button type="button" className="progress-btn">
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
