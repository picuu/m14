import { ref } from 'vue'
import useApi from './useApi'

const user = ref([])

const useUser = () => {
  const { getData } = useApi(user)

  const getUser = (userId, queryParams) => {
    getData(`/user/${userId}`, queryParams)
  }

  return { user, getUser }
}

export default useUser
