<!-- _????.vue는 동적 경로 설정해 달라고 요청 -->
<template>
  <div>
      <h1>{{$route.params.id}}</h1>
      <div v-if="albumData">
        <div v-for="(album, index) in albumData" :key='index'>
            <Card 
            :url = 'album.artistViewUrl'
            :color = 'picker(index)'
            :title = 'album.collectionCensoredName'
            :artistName = 'album.artistName'
            :albumImage = 'album.artworkUrl60'
            />
        </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
    data(){
        
    },
    components : {
        Card
    },
    methods: {
        picker(index){
            return index % 2 == 0 ? 'red' : 'blue';
        }
    },
    computed: {
        albumData(){
            // return this.$store.albums;
            return {
                albumData: res.data.results
            }
        }
    }
}
</script>

<style>

</style>