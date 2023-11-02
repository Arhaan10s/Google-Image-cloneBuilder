import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID hTfMkioZQR5Ye7XIkivoD-5DSjSbP8hGO2HwXWbLopg',
    },
    params: {
      query: term,
    },
  });


  return response.data.results;
};

export default searchImages;
