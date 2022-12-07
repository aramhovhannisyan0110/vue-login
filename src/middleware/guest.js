export default function guest ({ next, store, nextMiddleware }) {
  if (store.getters['user/getUser']) {
    return next({
      name: 'Profile'
    })
  }

  return nextMiddleware()
}
