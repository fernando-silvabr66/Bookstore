import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const TESTDATA = [
    {
      id: 1,
      title: 'React Tutorials',
      author: 'Anonymous',
      category: 'Computer Science',
    },
    {
      id: 2,
      title: 'Macroeconomy',
      author: 'John Doe',
      category: 'Economics',
    },
    {
      id: 3,
      title: 'Computer Fundamentals',
      author: 'Plato',
      category: 'Computing',
    },
  ];

  return (
    <div>
      <ul>
        {TESTDATA.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
