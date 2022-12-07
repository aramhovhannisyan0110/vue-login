<template>
  <div id="home">
    <NavbarComponent />
    <ProfileComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import ProfileComponent from '@/components/ProfileComponent'

export default {
  name: 'ProfileView',
  components: {
    ProfileComponent,
    NavbarComponent
  }
}
</script>
