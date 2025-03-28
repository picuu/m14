import { ref } from 'vue'
import useApi from './useApi'

const users = ref([])

const useUsers = () => {
  const { getData } = useApi(users)

  const getUsers = (queryParams) => {
    getData('/user', queryParams)
  }

  return { users, getUsers }
}

export default useUsers
