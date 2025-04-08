import { ref } from 'vue'
import useApi from './useApi'

const usePost = () => {
  const post = ref([])

  const { getData } = useApi(post)

  const getPost = (postId, queryParams) => {
    getData(`/post/${postId}`, queryParams)
  }

  return { post, getPost }
}

export default usePost
