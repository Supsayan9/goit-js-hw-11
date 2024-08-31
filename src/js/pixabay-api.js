const BASE_URL = 'https://pixabay.com/api/?';

export const gethPhotos = searchValue => {
  const options = new URLSearchParams({
    key: '45539852-e7385dbf9677b23660ec365b6',
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${options}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};