<template>
    <Markdown url="https://raw.githubusercontent.com/letslearn373/utube.process-service/dev/README.md"></Markdown>
</template>

<script>
import Markdown from '../components/Markdown.vue';

export default {
    name: 'process-service-component',
    components: {
        Markdown
    },
    created() {
        document.title = "Process Service"
    }
}
</script>