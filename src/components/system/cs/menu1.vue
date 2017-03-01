<template>
    <div>
    <h1>统计列表</h1>
    <el-input  v-model="message" placeholder="按姓查找" class="search"/>
     <el-button icon="search" type="primary"  class="animated infinite bounce"></el-button>
    <ul>
       
        <li v-for="(item,index) in evenItems">
            <span class="list1">{{ item.name }}</span>
            <span class="list2">{{ item.select }}</span>
            <span class="list3">{{ item.value1 }}</span>
            <span class="list4">
             <el-button  icon="edit" type="primary" @click="edit(item)">edit</el-button>
            <el-button @click='sss(index)' icon="delete">delete</el-button>
            </span>
        </li>
       
    </ul>
 
   
    <el-dialog v-model="something">
        <h2>编辑</h2>
        <my-form :people="person"></my-form>
        <el-button @click="wan">完成</el-button>
    </el-dialog>
    </div>
</template>
<script>
import myForm from './from.vue'
    export default {
        name:'menu1',
        components: {
          myForm  
        },
        data () {
            return {
                items:this.$store.state.listitems,
                msg:'',
                something:false,
                person:'',
                message:'',
            }
        },
        computed:{
            evenItems(){
                var that = this;
                return this.$store.state.listitems.filter(function(item){
                    if(that.message.trim()!=''){
                        return !item.name.indexOf(that.message)
                    }else{
                        return item
                    }
                })
            }
        },
        methods: {
            add () {
                this.people.push(this.msg),
                this.msg=''
            },
            sss(index){
                // this.$store.state.items.splice(index,1)
                this.$store.commit('delete',index);
            },
            edit(item){
                this.person=item;
                this.something=true;
            },
            wan(){
                this.something=false;
            }
        }
    }
</script>
<style scoped>
    div{
        margin-top: 0px;
        padding-top: 10px;
    }
    li{
        margin: 10px;
        list-style-type: none;
        /*float: left;*/
    }
    .search{
        width: 500px;
        margin-left: 50px
    }
    
    .list1{
       width: 100px;
        background-color: paleturquoise;
        padding: 20px;
    }
     .list2{
        width: 200px;
    }
     .list3{
        min-width: 50px;
    }
     .list4{
        min-width: 50px;
    }
     
</style>