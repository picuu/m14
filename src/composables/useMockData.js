/* eslint-disable no-unused-vars */
import { ref } from 'vue'
import { userData, postData } from '../mocks'

const posts = ref([])
const users = ref([])

const useMockData = () => {
  const getPosts = (_) => {
    posts.value = { ...postData }
  }

  const getUsers = (_) => {
    users.value = { ...userData }
  }

  return { posts, getPosts, users, getUsers }
}

export default useMockData
