<template>
  <div id="login">
    <form @submit.prevent="login">
      <h3>Login</h3>

      <h5 v-if="errorMessage" class="error">The email address or password is incorrect.</h5>

      <label for="username">Email</label>
      <input id="username" type="text" placeholder="Email" v-model="email" @input="changeData">
      <span class="validationError" v-if="validate.email">The input is not an email</span>

      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Password" v-model="password" @input="changeData">
      <span class="validationError" v-if="validate.password">Min length for password 8</span>

      <button>Log In</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: false,
      validate: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    ...mapMutations({
      loginSetUser: 'user/setUser'
    }),
    ...mapActions({
      loginRequest: 'user/loginRequest'
    }),
    async login () {
      if (this.validateEmailPassword()) {
        this.loginRequest({
          email: this.email,
          password: this.password
        })
          .then(({ data }) => {
            this.loginSetUser(data)
            this.$router.push({ path: '/profile' })
          })
          .catch(() => {
            this.errorMessage = true
            console.log('The email address or password is incorrect.')
          })
      }
    },
    validateEmailPassword () {
      const emailValidation = !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
      const passwordValidation = !(this.password.length >= 8)
      this.validate = {
        email: emailValidation,
        password: passwordValidation
      }
      return !(emailValidation || passwordValidation)
    },
    changeData () {
      this.validate = {
        email: false,
        password: false
      }
    }
  }
}
</script>

<style scoped>
@import '@/style/login.css';
</style>
