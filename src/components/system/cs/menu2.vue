<template>
    <div>
    <h1>添加</h1>
    <my-form :people=people></my-form>
    <el-button @click='add' icon="plus" :plain="true">add</el-button>
    <el-button @click='reset' icon="document">reset</el-button>
    </div>
</template>
<script>
    import myForm from './from.vue'
    export default {
        name:'menu2',
        components: {
            myForm
        },
        data () {
            return {
                people:{
                    name:'',
                    radio:'',
                    checkList:[],
                    select:'',
                    value1:''

                },
                options:['北京','天津','上海'],
                pickerOptions0:{
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
          }
                }
            }
        },  
        methods: {
            add(){
                // this.$router.push('/main/menu1')
                if(this.people.name.trim()!=''){
                    this.$store.commit('add',this.people);
                    this.reset();

                    this.$message({
                        message:'添加成功',
                        type:'success'
                    })  
                }else{
                     this.$message({
                        message:'姓名不能为空',
                        type:'warning'
                    })
                }
            },
            reset(){
              this.people = {
                            name:'',
                            radio:'',
                            checkList:[],
                            select:'',
                            value1:''
                    }
              
            }
        }
    }
</script>   
<style scoped>
    div{
        margin-top: 0px;
        padding-top: 10px;
        padding-left: 10px;
        text-align: left
    }
    li{
        margin: 10px;
    }
    .name{
        max-width: 500px;
    }
</style>