<template>
    <el-row>
        <el-col :span="6">
            <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple-light">
                <h2>用户登录</h2>
                <p><el-input v-model="user.name" placeholder="请输入用户名" class="put"></el-input></p>
                <p><el-input v-model="user.password" placeholder="请输入密码" class="put"></el-input></p>
                <p>
                    <el-button @click.native="login" class="btn">登录</el-button>
                </p>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name :'login',
        data () {
            return {
                 user:{
                    name:'',
                    password:''
                }
            }
        },
        methods:{
             login(){
                 if(this.user.name.trim()==''||this.user.password.trim()==''){
                    this.$message({
                        message:'用户名或密码不能为空',
                        type:'warning'
                    })
                }else if(this.user.name.trim()=='admin'&&this.user.password.trim()=='123'){
                    this.$message({
                        message:'登录成功',
                        type:'success'
                    });
                    this.$router.push('/main')
                }else{
                    this.$message.error('用户名或密码错误！')
                }
            //存入cookie
                document.cookie = 'username='+this.user.name;
                // this.$store.dispatch('incrementAsync',this.user);
                        
            }
        }
    }
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    margin-top: 100px;
   
  }
  .el-col {
    border-radius: 4px;
     
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 360px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  h2{
    margin-top: -1px;
    padding-top: 50px
  }
  .btn{
    margin-top: 10px;
    min-width: 300px
  }
  .put{
    margin-top: 10px;
    max-width: 300px
  }
</style>