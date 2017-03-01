<template>
    <div >
            <p>菜单详情页</p>
    {{ this.$route.params.id }}
    </div>
</template>
<script>
    export default {
        name:'content',
        data () {
            return { 

            }
        }
    }
</script>
<style scoped>
    div{
        margin-top: -10px;
        margin-left: 20px; 
        height: 100%;
        background-color: #f00
    }
</style>