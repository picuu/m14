const { initUser, user } = useAuth()

export default defineNuxtRouteMiddleware(async (to, from) => {
  await initUser()

  if (user.value === null) return navigateTo('/login')
})