<!--  -->
<template>
  <div @click="fn">
      <!-- <div>{{lacolsad}}</div> -->
  </div>
  
</template>

<script>
/*当一个组件要获取多个状态的时候，将这些状态都声明为计算属性会有些沉余和重复，可以使用mapstate这个vuex小插件
  这个辅助函数帮我们生成计算属性
*/

import {mapState} from 'vuex';
// console.dir(mapState)
export default {
  data () {
    return {
        // localCount:3
    };
  },

  components: {},

  computed: {
  // lacolsad(){return this.localCount},
  //...运算符可以把对象传递给computed，这样共享的数据可以和局部的数据共同存在
  ...mapState(
      {
     // 当state的(第一种写法)
    //   count: 'count',
      //count的别名（第二种写法）
    //   countAlias:'count',
    //（第三种写法）
      // count(state){
      //     return state.count
      // }
  }
  //数组形式的写法
// ['count','name']
  ),
      },
  mounted(){
      // console.log(...[1,2])
  },

  methods: {
      fn(){
          // this.$store.commit('increment')
      }
  }
}

</script>
<style lang='scss' scoped>
</style>