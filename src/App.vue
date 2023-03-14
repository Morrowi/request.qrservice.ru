<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
//import MainPage from './components/Home.vue'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    //MainPage,
    Footer
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    }
  }
}
</script>

