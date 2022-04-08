const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    category: 'Religion',
    title: 'Absalom, Absalom!',
    author: 'William Faulkner',
  },
  {
    category: 'Romance',
    title: 'The sun also rises',
    author: 'Ernest Hemingway',
  },
  {
    category: 'Fiction',
    title: 'Brave new world',
    author: 'Aldous Huxley',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;
