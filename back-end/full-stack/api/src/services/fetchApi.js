export const fetchBookSearch = async (token) => {
  const url = `https://digimon-api.vercel.app/api/digimon/name/${token}`;
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

export const fetchBook = async () => {
  const url = 'https://digimon-api.vercel.app/api/digimon/';
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

