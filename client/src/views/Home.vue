<template>
  <div class="home">
   <CardsList></CardsList>
  </div>
</template>

<script>
// @ is an alias to /src
import CardsList from "../components/CardsList";

export default {
  name: 'Home',
  components: {
    CardsList
  }
}
</script>
