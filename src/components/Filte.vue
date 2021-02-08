<!-- Getter -->
<template>
  <div>
    <div></div>
    <div></div>
  </div>
  
</template>

<script>
//mapGetters辅助函数仅将store中的getter映射到局部计算属性
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
      // doneTodesCount(){
      //   /*此时拿到的是store中的计算后的值*/
      //     return this.$store.getters.doneTodos
      // },
      // done(){
      //   return this.$store.getters.done
      // },
      // getTodoByid(){
      //   return this.$store.getters.getTodoByid(1)
      // }

      //对象形式的可以改变名字
      // ...mapGetters([
      //   'doneTodos',
      //   'done',
      //   'getTodoByid'
      // ])
  },

  mounted(){
    // console.log( this.$store.getters.getTodoByid(1))
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>