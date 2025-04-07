import { ref } from 'vue'
import useApi from './useApi'

const useUser = () => {
  const user = ref([])

  const { getData } = useApi(user)

  const getUser = (userId, queryParams) => {
    getData(`/user/${userId}`, queryParams)
  }

  return { user, getUser }
}

export default useUser
