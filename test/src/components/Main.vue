<template>
<div>
   <my-header v-bind:cartItemCount='cartItemCount'>
   </my-header>   
   <main>
      <div v-for="product in sortedProducts" v-bind:key='product.id'>
         <div class="row">
            <div class="col-md-5 col-md-offset-0">
                  <figure>
                     <img 
                     v-bind:src="product.image" 
                     class='product'>
                     <!-- v-bind: Directive, 양방향 바이딩
                        축약표현, :src="product.image"
                     -->
                  </figure>
            </div>
            <div class="col-md-6 col-md-offset-0 description">
                  <!-- <h1 v-text='product.title'></h1> -->
                  <router-link 
                     tag='h1' :to="{name:'Id', params:{id:product.id}}"
                  >
                     {{product.title}}
                  </router-link>
                  <p v-html='product.description'></p>
                  <p class='price'>{{ product.price | formatPrice }}</p>
                  <!-- 필터적용: {{property|filterfunctionname}} -->
                  <button class="btn btn-primry btn-lg"
                        v-on:click='addToCart(product)'
                        v-if='canAddToCart(product)'
                  >
                     장바구니 담기 
                  </button>
                  <button v-else disable='true' class="btn btn-primary btn-lg">
                     장바구니 담기
                  </button>
         <transition name="bounce" mode="out-in">
                  <span v-if="product.availableInventory - cartCount(product.id) === 0" class="inventory-message" key="0">
                     품절!
                  </span>
                  <span v-else-if="product.availableInventory - cartCount(product.id) < 5" class="inventory-message" key="">
                     {{product.availableInventory - cartCount(product.id)}} 남았습니다. 마감임박!
                  </span>
                  <span v-else class="inventory-message" key="">
                     지금구매가능!
                  </span>
         </transition>
                  <div class="rating">
                     <span 
                     v-bind:class=
                        "{'rating-active':checkRating(n,product)}" 
                     v-for="n in 5" :key='n' >
                        ☆
                     </span>
                     <!-- class의 속성을 조건에 따라 적용시키기 위해
                     "{'rating-active':checkRating(n)}" -->
                  </div>
            </div>
         </div>
         <hr />
      </div>
   </main>
</div>
</template>
<script>
import MyHeader from './Header' // './Header.vue'
export default {
   name:'imain',
   data(){
      return{
         products:[],
         cart:[]
      }

   },
   computed:{
      // products(){
      //    return "products";
      // },
      
      cartItemCount(){
         return this.cart.length ||'';

      },
      sortedProducts(){
         if(this.products.length>0){
            let productsArray = this.products.slice(0);
            function compare(a,b){
                  if(a.title.toLowerCase()<b.title.toLowerCase())
                  return -1;
                  if(a.title.toLowerCase()>b.title.toLowerCase())
                  return 1;
                  return 0;
            }
            return productsArray.sort(compare);
         }
      }
   },
   components:{MyHeader},
   methods: {
      canAddToCart: function(myProduct){
         return myProduct.availableInventory > this.cartCount(myProduct.id);
      },
      addToCart: function(myProduct){ this.cart.push(myProduct.id); },
      cartCount(id){
         let count= 0;
         for(var i = 0; i<this.cart.length;i++){
            if(this.cart[i]===id) count++;

         }
         return count;
      },
      checkRating(n,myProduct){
         return myProduct.rating-n>=0;
      },      
   },
   filters:{// filter 옵션에 필터 함수 작성
         formatPrice:(price)=>{ 

            if(!parseInt(price)){ return "";}
            if(price>999){
               var priceString = ""+price;                        
               var priceArray = priceString.split("").reverse();
               var index=3;
               while(priceArray.length > index){
                     priceArray.splice(index,0,",");
                     index+=4;
               }
               return priceArray.reverse().join("")+"원";
            }else{
               return price+"원";
            }
         }
   },
   created:function(){
      this.$store.dispatch('intStore');
         // axios.get('./static/products.json')
         // .then((res)=>{
         //    this.products=res.data.products;
         //    console.log(this.products);
         // })
         // .catch((err)=>{
         //    console.log(err);
         // }); 
   },

}
</script>
<style scoped>
.bounce-enter-active{
   animation: shake 10.5s cubic-bezier(.37, .07, .19, .97) both;
   transform: translate3d(0,0,0);
   backface-visibility: hidden;
}

@keyframes shake{
   10%,90%{
      color: red;
      transform: translate3d(-1px,0,0);
   }
   20%,80%{
      transform: translate3d(2px,0,0);
      color: greenyellow;
   }
   30%,50%,70%{
      color: blueviolet;
      transform: translate3d(-4px,0,0);

   }
   40%,60%{
      color: gray;
      transform: translate3d(4px,0,0);
   }   
}

</style>