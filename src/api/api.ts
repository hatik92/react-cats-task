import axios from 'axios'

const apiConfig = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/'
})


export const imgCategories = {
  getCategories() {
    return apiConfig.get('categories').then(res => res.data)
  }
}

export const catImages = {
  getImages(categoryId: number) {
    return apiConfig.get(`images/search?limit=10&page=1&category_ids=${categoryId}`).then(res => res.data)
  },
  getMoreImages(categoryId: number, page = 1) {
    return apiConfig.get(`images/search?limit=10&page=${page}&category_ids=${categoryId}`).then(res => res.data)
  }
}