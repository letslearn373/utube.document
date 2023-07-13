<template>
  <v-row>
    <v-col>
      <div class="text-h2 ont-weight-regular">Introduction</div>
      <div class="text-subtitle-1">A minimal YouTube like video streaming platform using Microservice based architecture
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "introduction-component",
  created() {
    document.title = "Introduction"
  }
}
</script>