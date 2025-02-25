import axios from 'axios'

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface User {
  id: number
  name: string
  email: string
  email_verified_at: Date
  two_factor_secret: string | null
  two_factor_recovery_codes: string[] | null
  two_factor_verified_at: Date | null
  created_at: Date
  updated_at: Date
}

const user = ref<User | null>(null)

export const useAuth = () => {
  async function login(payload: LoginPayload) {
    const res = await axios.post("/login", payload);
    useRouter().push('/me')
  }

  async function register(payload: RegisterPayload) {
    const res = await axios.post("/register", payload);
    if (res.status === 201) useRouter().push('/me')
  }

  const logout = async () => {
    await axios.post('/logout')
    user.value = null
  
    useRouter().replace('login')
  }

  const getUser = async (): Promise<User | null> => {
    try {
      const { data: user } = await axios.get('/user')
      return {
        ...user,
        created_at: new Date(user.created_at),
        updated_at: new Date(user.updated_at),
        email_verified_at: user.email_verified_at ? new Date(user.email_verified_at) : null,
        two_factor_verified_at: user.two_factor_verified_at ? new Date(user.two_factor_verified_at) : null
      }
    } catch (e) {
      return null
    }
  }

  const initUser = async () => {
    if (user.value !== null) return
    user.value = await getUser()
  }

  return { login, register, logout, initUser, user }
}
