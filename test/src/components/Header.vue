<template>
   <header>
      <div class="navbar navbar-default">
            <div class="navbar-header">
               <!-- <h1 v-text='sitename'></h1> -->
               <h1><router-link :to="{name:'iMain'}"> {{sitename}}</router-link></h1>
            </div>
            <div class="nav navbar-nav navbar-right cart">
               <div v-if='!mySession'>
                  <button type='button' class="btn btn-default btn-lg" @click="signIn">
                     로그인
                  </button>
               </div>
               <div v-else>
                  <button type='button' class="btn btn-default btn-lg" @click="signOut">
                     <img :src="mySession.photoURL" alt="" class="photo">
                     로그아웃
                  </button>
               </div>
            </div>
            <div class="nav navbar-nav navbar-right cart">

               <!-- <button class="btn btn-default btn-lg"
                        @click='showCheckOut'
               >
               <!-- v-on:click='showCheckOut' -->
               <!--    <span class="glyphicon glyphicon-shopping-cart">
                        {{cartItemCount}}
                  </span>
                  <span>체크아웃</span>
               </button> -->

               <router-link   active-class='active'
                  tag='button' class='"btn btn-default btn-lg' :to="{name:'Form'}"
               > 
                  <span class="glyphicon glyphicon-shopping-cart">
                           {{cartItemCount}}
                     </span>
                     <span>체크아웃</span>                
               </router-link>
            </div>
      </div>            
   </header>
</template>
<script>
import firebase from 'firebase';
export default {
   name:'my-header',
   data(){
      return {sitename:'Vue.js 애완용품샵'}
   },
   props:['cartItemCount'],
   //생성 되기 전 실행 life cycle
   beforeCreate(){
      firebase.auth().onAuthStateChanged((user)=>{
         this.$store.commit('SET_SESSION', user||false)
      })
   },
   methods:{
      showCheckOut: function(){
         // this.showProduct = this.showProduct? false: true;
         //router의 index.js참고
         this.$route.push({name:'Form'});
      },
      signIn(){
         let provider = new firebase.auth.GoogleAuthProvider();
         firebase.auth().signInwWithPopup(provider).then(()=>{
            console.log('로그인 성공');
         }).catch((err)=>{
            console.log("에러 발생 : " + err);
         })
      },
      signOut(){
         firebase.auth().signOut.then(()=>{
            console.log("로그아웃 성공");
         }).catch((err) => {
            console.log("에러 발생 : " + err);
         })
      },
   },
   computed : {
      mySession(){
         return this.$store.getters.session;
      }
   }
}
</script>
<style scoped>
a {
   text-decoration: none;
   color:coral;
}
.router-link-exact-active{
   color:deeppink;
}

</style>