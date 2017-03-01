<template>
    <div id="main">
        <el-row type="flex" justify="end" :gutter=20>
            <el-col :span="3">
                <div class="text" @click="reLogin">
                    <span>{{ name }}</span>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="text" >
                    <span>{{ modifyPasswd }}</span>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="text"  @click="closeSystem">
                    <span>{{exitSystem}}</span>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="logo-bg">
                    <img src="..\..\..\assets\logomain.png"/>
                    <b class="title">{{ logoTitle }}</b>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="navigation-menu">
                    
                        <navigation-menu class="h-menu"></navigation-menu>
                    
                   
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="side-menu">
                    <side-menu :models="menu"></side-menu>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="main-context" style="min-height:700px;background-color: #CCFFE6">
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import NavigationMenu from './NavigationMenu.vue'
import SideMenu from './sideMenu.vue'
import menudata from './menudata.js'



    export default {
        name:'main',
        data () {
            return {
               modifyPasswd:'修改密码',
               exitSystem:'退出系统',
               logoTitle:'中航服工具集',
               menu:menudata

            }
        },
        components: {
            NavigationMenu,SideMenu
        },
        computed: {
          name(){
               var userName = this.getCookie();
            //   var userName=this.$store.state.user.name
              if(userName!=''){
                  return '欢迎,'+userName
              }else{
                  return '请登录'
              }
           
           
          }  
        },
        // computed:mapState({
        //     name:state => state.user.name
        // }),
        methods: {
            aaa(){
                this.$store.dispatch('incrementAsync',this.user)
            },
            //获取cookie
            getCookie(){
                var c_name="username";
                if (document.cookie.length>0){
                    var c_start=document.cookie.indexOf(c_name + "=")
                    if (c_start!=-1){ 
                        c_start=c_start + c_name.length+1 
                        var  c_end=document.cookie.indexOf(";",c_start)
                        if (c_end==-1) c_end=document.cookie.length
                        return unescape(document.cookie.substring(c_start,c_end))
                    } 
                }
                return ""
            },
            closeSystem(){
                this.$router.push('/');
            },
            reLogin(){
                if(this.name=="请登录"){
                     this.$router.push('/');
                }
            }
        }
    }
</script>
<style lang="css" scoped>
.side-menu{
    background-color: #C9423F;
    min-height: 735px;
    margin-top: -20px;
}
.h-menu{
    margin-left: 50px;
   
   
}

    .text{
        text-align: center;
        padding: 8px;
        font-size: 15px;
        background: #efefef;
        border-radius: 10px;
    }
  .logo-bg{
      padding-left: 12px;
      margin-top: -10px;
      text-align: center;
      
  }
  .title{
      margin-bottom: 20px;
      font-size: 30px;
      font-weight: bold;
     
  }
  .navigation-menu{
       min-height: 60px;
       background-color: #D6000F;
       border-top-left-radius: 200px;
       padding-top: 10px;
       margin-top: 10px;
      
  }
 
</style>