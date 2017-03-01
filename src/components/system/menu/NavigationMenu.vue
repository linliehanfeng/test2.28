<template>
     <!--<el-menu default-active="1" class="el-menu-vertical-demo" mode="horizontal" >
      <el-menu-item index="1">导航一</el-menu-item>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>-->
<el-row :gutter="20" class="row">
 <el-col :span="1" class="btn" v-show="isLeft">  
        <el-button  icon="caret-left" @click="back"></el-button>     
</el-col>
  <el-col :span="number" v-for="item in computItems" :key="item.name">
      <div :class="{open:item.open}" class="navigation" @click="openItem(item)">
            {{ item.name }}
        <i class="el-icon-close" style="float: right;padding-right: 10px;" @click="isClose(item)"></i>
      </div>
  </el-col>
  <el-col :span="1" class="btn" v-show="isRight">  
        <el-button  icon="caret-right" @click="next"></el-button>     
</el-col>
 
</el-row>
</template>
<script>
  
    export default {
        name:'navigationmenu',
        data () {
            return {
              items:this.$store.state.items,
              a:0,
              b:7,
            //   isOpen:false,
           
            }
        },
        computed: {
            //计算每个item的占的宽度
              number(){
            if(this.items.length<=21){
                return (21-(21%this. computItems.length))/this. computItems.length;
            }else{
                return 1
            }
           
          },
          computItems(){

                return this.items.slice(this.a,this.b);
            },
          isLeft(){
            if(this.a>0){
                return true;
            }else{
                return false;
            }
          },
          isRight(){
            if(this.items.length>this.b&&this.b<this.items.length){
                return true;
            }else{
                return false;
            }
          }
        },
        methods: {
            back(){
                this.a=this.a-7;
                this.b=this.b-7
            },
            next(){
                this.a=this.a+7;
                this.b=this.b+7;
            },
            isClose(item){
                this.$store.commit('removeItem',item);
            },
            openItem(item){
                for(var i=0;i<this.items.length;i++){
                    if(item == this.items[i]){
                        this.items[i].open=true;
                        this.$router.push("/main/"+item.path)
                    }else{
                        this.items[i].open=false; 
                    }
                }
            }
        }
        
    }
</script>
<style lang="css" scoped>
    .el-menu-vertical-demo{
        background-color: #D6000F;
    }
    .navigation{
       
        margin-bottom: 0px;
        margin-left: 10px;
        min-height: 30px;
        max-width: 300px;
        min-width: 100px;
        background-color: #CC0033;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 0px;
        font-size: 13px;
        color: #fff
        
    }
    .open{
        background-color: #fff;
        color: #000;
    }
   
    .row{
        padding-left: 25px;
        padding-top: 20px;
        padding-bottom: 0px;
        padding-right: 25px;
    }
    .btn{
        padding-top: 0px;
    }
</style>