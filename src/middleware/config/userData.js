import { getLocalStorage } from '@/utility/localStorage'

export default function userData (store) {
  if (!store.getters['user/getUser']) {
    const user = JSON.parse(getLocalStorage('u'))
    if (user) {
      store.commit('user/setUser', user)
    }
  }
}
