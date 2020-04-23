<template>
  <div>
    <h1>iTunes 검색하기</h1>
    <br>
    <form @submit.prevent="submitFunc">
      <input type="text" placeholder="가수 명을 입력하세요." v-model="searchkeyword" ref="searchkeyword" autofocus/>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchkeyword : ''
    }
  },
  methods: {
    submitFunc(event){
      //라우터 객체에 넣어줌
      this.$router.push(`results/${this.searchkeyword}`);
    }
  }
}
</script>

<style>
  *{
    text-align: center;
  }
  h1{
    padding : 20px;
  }
</style>