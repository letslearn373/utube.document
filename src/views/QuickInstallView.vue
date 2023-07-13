<template>
    <h1>Quick Install</h1>
    <Pre>$  npm install</Pre>
</template>

<script>
import Pre from '../components/Pre.vue'

export default {
    name: 'quick-install-view',
    created() {
        document.title = "Quick install"
    },
    components: {
        Pre
    }
}
</script>