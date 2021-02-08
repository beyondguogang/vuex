<!-- Mutation -->
<template>
  <div>{{increment1}}</div>

</template>

<script>
import {mapMutations} from 'vuex';
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {
      increment1(){
          return this.$store.state.count
      }
  },

  mounted(){
      //普通的提交模式刚才在线上修改了
    //   this.$store.commit('increment',{amout:9});
      //对象的提交方式
    //   this.$store.commit({type:'increment',amout:9});
      
      },
//里面的名字不能和数据中的名字相同
  methods: {
     ...mapMutations([
            'increment'
        ])
  }



}

</script>
<style lang='scss' scoped>
</style>
