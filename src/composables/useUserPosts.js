import { ref } from 'vue'
import useApi from './useApi'

const useUserPosts = () => {
  const userPosts = ref([])

  const { getData } = useApi(userPosts)

  const getUserPosts = (userId, queryParams) => {
    getData(`/user/${userId}/post`, queryParams)
  }

  return { userPosts, getUserPosts }
}

export default useUserPosts
