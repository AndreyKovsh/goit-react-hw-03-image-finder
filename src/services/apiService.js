import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=19614355-51590948188acde31377fd3a2&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;
