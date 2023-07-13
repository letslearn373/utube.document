<template>
    <v-row>
        <v-col>
            <zero-md :src="url"></zero-md >
        </v-col>
    </v-row>
</template>

<script>
import 'zero-md';

export default {
    name: 'markdown-component',
    props: ['url']
}   
</script>