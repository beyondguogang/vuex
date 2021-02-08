import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //vuex中的共享数据
  state: {
    count:0,
    name:'guogang',
    todos:[
      {id:1,done:false},
      {id:2,done:true}
    ]
  },
  /*相当于在私有组件中的计算属性，可以通过getters属性来对state中的数据进行计算
  最终在其他的私有组件中进行调用，这样避免了在每个组件中都进行同样的计算，只需要
  在此计算好同样的函数，以后每次调用都会计算这个函数，也就是说当计算属性发现依赖的值
  变化后就会重新执行计算属性中的函数，如果依赖的值没有发生变化就不重新执行函数而是
  拿到之前缓存的值
  */
  getters:{
    doneTodos:state=>{
      return state.todos.filter(todo=>todo.done)
    },
    //可以把其他的gettes传入第二个参数
    done:(state,getters)=>{
      return getters.doneTodos[0].done
    },
    //通过返回方法来定义属性可以对数据进行查询也就是说他执行后返回一个函数
    getTodoByid:(state)=>(id)=>{
      //find方法返回数组中每一项中符合条件的第一项
      return state.todos.find(todo=>todo.id==id)
    }
  },
  //变更数据的方法通过组件调用commit方法执行mutations中的某个方法
  //mutations中必须是同步函数，因为如果是异步函数此时就追踪不了，这将导致问题
  mutations: {
    //当执行时可以给自定义事件函数传递参数，第二个参数是实际传递的参数
    increment(state){
      state.count++;
      // console.log(state.count)
    }
  },
  actions: {
  },
  modules: {
  }
})