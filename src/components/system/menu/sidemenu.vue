<template>
    <ul>
        <li v-for="model in models">
            <tree-menu :model="model"></tree-menu>
        </li>
    </ul>
   
</template>
<script>
import TreeMenu from './TreeMenu.vue'
    export default {
        name:'sidemenu',
        props: ['models'],
        data () {
            return {
               
            }
        },
        components: {
            TreeMenu
        }
    }
</script>
<style lang="css" scoped>
  li{
 
      list-style: none;
      background-color: #DE4945;
      min-height: 50px;
     
    
  }
  ul{
      
      padding: 0px;
      min-height: 50px;
         
  }
</style>