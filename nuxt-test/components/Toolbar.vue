<template>
    <v-toolbar dark color="blue">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">
            <!-- <router-link> vue-router 사용 불가능</router-link> -->
            <nuxt-link class="title" to="/">
                iTunes 앨범검색
            </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn to="/" icon><v-icon>refresh</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default{
    
}

</script>

<style>

</style>