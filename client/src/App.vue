<template>
  <div id="app">
    <Navbar />
    <CardsList/>
  </div>
</template>

<script>
  import CardsList from "./components/CardsList";
  import Navbar from "./components/Navbar"

  export default {
    name: 'App',
    components: {
      CardsList,
      Navbar,
    }
  }
</script>

<style lang="scss">
  html {
    font-size: 1rem;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
