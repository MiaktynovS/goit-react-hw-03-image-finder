import axios from "axios";

const imageService = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31820380-db9534178f32a7de64fe4d5fe',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImages = async (q, page = 1) => {
  const { data } = await imageService.get(`?q=${q}&page=${page}`) 
  return data
};



