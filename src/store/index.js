import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

    const state={
        user:{
            name:'',
            passwd:''
        },
        items:[],
        listitems: [
      { name: 'zhangsan1', text: '', radio: '', checkList: [], select: '上海', value1: '2017.1.1' },
      { name: 'zhangsan2', text: '', radio: '', checkList: [], select: '天津', value1: '2017.1.2' },
      { name: 'zhangsan3', text: '', radio: '', checkList: [], select: '北京', value1: '2017.2.5' },
      { name: 'zhangsan4', text: '', radio: '', checkList: [], select: '天津', value1: '2017.9.8' }
    ]
    }
    const mutations = {
        setUser(states,data){
            state.user=data
            console.log(state.user)
        },
        //添加数据给数组
        addItems(state,data){
            state.items.push(data)
        },
        removeItem(state,data){
            state.items.splice(data,1);
        },
        //表单数据
         delete(state, index) {
            state.listitems.splice(index, 1);
        },
        add(state, item) {
            state.listitems.push(item);
        }
    }
    const actions={
        incrementAsync({commit},todos){
            commit('setUser',todos)
        }   
    }


export default new Vuex.Store({
    state,
    mutations,
    actions

})