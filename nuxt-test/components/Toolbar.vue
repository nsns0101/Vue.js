<template>
    <v-toolbar dark color="blue">
        <v-toolbar-title class="white--text">
            <!-- <router-link> vue-router 사용 불가능</router-link> -->
            <nuxt-link class="title" to="/">
                iTunes 앨범검색
            </nuxt-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default{
    
}

</script>