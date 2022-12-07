<template>
  <div class="navbar">
    <a class="active">Profile</a>

    <a class="sign-out" @click="signOut">Sign out</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'NavbarComponent',
  methods: {
    ...mapMutations({
      removeUser: 'user/removeUser'
    }),
    signOut () {
      this.removeUser()
      this.$router.push('login')
    }
  }
}
</script>

<style scoped>
@import '@/style/navbar.css';
</style>
