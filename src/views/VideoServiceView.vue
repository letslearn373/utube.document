<template>
    <Markdown url="https://raw.githubusercontent.com/letslearn373/utube.video-service/dev/README.md"></Markdown>
</template>
import Test from '../components/Test.vue';

<script>
import Markdown from '../components/Markdown.vue';

export default {
    name: "video-service-component",
    components: {
        Markdown
    },
    created() {
        document.title = "Video Service"
    }
}
</script>