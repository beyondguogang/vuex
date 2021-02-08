<template>
  <div class="home">
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld hh="Welcome to Your Vue.js App"/>
    <Counter/>
    <Filte/>
    <Muta/>
    <!-- <div>{{count}}asdfasdf</div> -->
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Counter from '@/components/Counter.vue';
import Filte from '@/components/Filte.vue';
import Muta from '@/components/Muta.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter,
    Filte,
    Muta
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  }
}
</script>
