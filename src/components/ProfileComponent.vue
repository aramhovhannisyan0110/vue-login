<template>
  <div class="card">
    <img src="../assets/img.png" alt="John" style="width:100%">
    <h1>{{ user.name }}</h1>
    <div class="info">
      <p class="title"><strong>Email: </strong>{{ user.email }}</p>
      <p class="title"><strong>Age: </strong>{{ user.age }}</p>
      <p class="title"><strong>Location: </strong>{{ user.location }}</p>
      <p class="title"><strong>Gender: </strong>{{ user.gender }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileComponent',
  data () {
    return {
      user: {
        name: '',
        email: '',
        age: 0,
        location: '',
        gender: ''
      }
    }
  },
  created () {
    this.user = this.getUser()
  },
  methods: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  }
}
</script>

<style>
@import "@/style/profile.css";
</style>
