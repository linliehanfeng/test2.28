<template>
 <ul :style="left">
           <div :class="{isRed:rootclass}"
                style="height: 100%"
                @click="toggle"
            >  
            <span v-show="isFolder&&!root">{{ open ? '-' : '+' }}</span>
             {{ model.name }}

          </div>
           <li v-show="open" v-if="isFolder" :style="left">
                <item
                    class="item"
                    v-for="model in model.children"
                    :key="model.name"
                    :model="model"
                ></item>
                
           </li>
            
       </ul>
    
</template>
<script>

    export default {
      name:'item',
        props: ['model'],
        data () {
            return {
                test:'第一页',
                open: false,
                items:[]
            }
        },
        computed: {
          isFolder(){
              return this.model.children&&this.model.children.length;
          },
          root(){
              return this.model.root;
          },
          rootclass(){
              if(this.model.root){
                  return true;
              }else{
                  return false;
              }
          },
          left(){
              var a = this.model.level;
              if(a==1){
                  return  "background-color: #E6E6E6";
              }else if(a==2){
                  return  "background-color: #CDCDCD";
              }else if(a==3){
                  return  "background-color: #9A9A9A"
              }
          }  
        },
        methods: {
           toggle: function () {
                if (this.isFolder) {
                this.open = !this.open
                }
                if(typeof(this.model.path)!="undefined"){
                    // alert(this.model.path)
                    this.$router.push('/main/'+this.model.path)
                    if(this.$store.state.items.length==0){
                        this.$store.commit('addItems',this.model);
                         this.model.open = true;
                    }else{
                        var flag = false;
                        for(var i =0;i<this.$store.state.items.length;i++){
                            if(this.model==this.$store.state.items[i]){
                                flag = true;
                                this.$store.state.items[i].open=true;
                                // break;
                            }else{
                                this.$store.state.items[i].open=false;
                            }
                        }
                          if(!flag){
                              this.model.open=true;
                             this.$store.commit('addItems',this.model);
                }
                    }

                    

                   
                    //   document.cookie = 'items='+this.items;
                    
                }
            }
              
        }
        
    }
</script>
<style lang="css" scoped>
   
  ul{
      /*padding-top: 10px;*/
      list-style: none;
      background-color: #fff;
      min-height: 50px;
      /*padding-left: 0;
      margin-left: 0;*/
     
    
     
  }
  li{
      
      /*padding: 0px;*/
      min-height: 50px;
    
  }
 ul li div{
    min-height: 50px;
    padding-top: 20px;
    border-bottom: 1px #f00 solid;
    text-align: center;

  }
  .item{
      padding: 0;
      margin: 0
  }
   .isRed{
        background-color: #DE4945;
        
    }
</style>