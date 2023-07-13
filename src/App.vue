<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Layout/>
</template>


<script>
import Layout from './components/Layout.vue';

export default {
  name: 'app-component',
  components: [
    Layout
  ]
}
</script>