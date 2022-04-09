const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/exS8dPsKZOTen7RJyYOl/books';

export const addBookApi = async (newBook) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

export const removeBookApi = async (bookID) => {
  await fetch(`${URL}/${bookID}`, {
    method: 'DELETE',
  });
};

export const getBooksApi = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};
