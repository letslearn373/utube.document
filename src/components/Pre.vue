<template>
    <v-row>
        <v-col>
            <pre><slot /></pre>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'pre-component',
    props: [
        'code'
    ]
}
</script>

<style scoped>
pre {
    background: rgb(76, 76, 76);
    color: rgb(255, 255, 255);
    padding: 1rem;
    margin: 1rem 0;
}
</style>