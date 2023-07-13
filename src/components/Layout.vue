<template>
    <v-app>
        <v-layout class="rounded rounded-md">
            <v-navigation-drawer>
                <v-list :items="items" />
            </v-navigation-drawer>
            
            <v-app-bar title="UTube Wiki" elevation="0"></v-app-bar>

            <v-main>
                <v-container>
                    <RouterView />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script>

// <RouterLink to="/">Home</RouterLink>
// <RouterLink to="/about">About</RouterLink>


export default {
    name: 'layout-component',
    data() {
        return {
            items: [
                { title: 'Introduction', value: 'introduction', props: { link: true, to:"/", prependIcon: 'mdi-home' } },
                { title: 'Quick install', value: 'install', props: { link: true, to:"/quick-install", prependIcon: 'mdi-wrench' } },
                
                { type: 'divider' },
                { type: 'subheader', title: 'Services', props: { inset: true } },
                { title: 'Video Service', value: 'video-service', props: { link: true, to:"/video-service", prependIcon: 'mdi-video-box' } },
                { title: 'Storage Service', value: 'storage-service', props: { link: true, to:"/storage-service", prependIcon: 'mdi-harddisk' } },
                { title: 'Process Service', value: 'process-service', props: { link: true, to:"/process-service", prependIcon: 'mdi-state-machine' } },
                
                { type: 'divider' },
                { type: 'subheader', title: 'Clients', props: { inset: true } },
                { title: 'Web Client', value: 'web-client', props: { prependIcon: 'mdi-laptop' } },
            ]
        }
    },
    methods: {
        onNavigationClick() {

        }
    }
}
</script>