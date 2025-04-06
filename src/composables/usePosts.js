import { ref } from 'vue'
import useApi from './useApi'

const posts = ref([])

const usePosts = () => {
  const { getData } = useApi(posts)

  const getPosts = (queryParams) => {
    getData('/post', queryParams)
  }

  return { posts, getPosts }
}

export default usePosts
