export const fetchBookSearch = async (token) => {
  const url = `http://localhost:3001/books/search?q=${token}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const fetchBook = async () => {
  const url = 'http://localhost:3001/books/';
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const fetchBookId = async (id) => {
  const url = `http://localhost:3001/books/${id}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};
