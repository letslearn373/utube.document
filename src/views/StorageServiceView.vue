<template>
    <Markdown url="https://raw.githubusercontent.com/letslearn373/utube.storage-service/dev/README.md"></Markdown>
</template>

<script>
import Markdown from '../components/Markdown.vue';

export default {
    name: 'storage-service-component',
    components: {
        Markdown
    },
    created() {
        document.title = "Storage Service"
    }
}
</script>