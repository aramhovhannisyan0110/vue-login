export default function auth ({ next, store, nextMiddleware }) {
  if (!store.getters['user/getUser']) {
    return next({
      name: 'Login'
    })
  }
  return nextMiddleware()
}
