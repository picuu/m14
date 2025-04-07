import { ref } from 'vue'
import useApi from './useApi'

const userPosts = ref([])

const useUserPosts = () => {
  const { getData } = useApi(userPosts)

  const getUserPosts = (userId, queryParams) => {
    getData(`/user/${userId}/post`, queryParams)
  }

  return { userPosts, getUserPosts }
}

export default useUserPosts
