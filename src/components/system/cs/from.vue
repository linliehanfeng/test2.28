<template>
    <div>
    <p>姓名：</p>
    <p>
        <el-input v-model="people.name" placeholder="请输入姓名" class="name"></el-input>
    </p>
    <p>性别：
    <el-radio class="radio" v-model="people.radio" label="男"></el-radio>
    <el-radio class="radio" v-model="people.radio" label="女"></el-radio>
    </p>
    <p>爱好：</p>
    <p>
        <el-checkbox-group v-model="people.checkList">
            <el-checkbox label="足球"></el-checkbox>
            <el-checkbox label="篮球"></el-checkbox>
            <el-checkbox label="排球"></el-checkbox>
        </el-checkbox-group>
    </p>
    <p>
        始发地：
         <el-select v-model="people.select" clearable placeholder="请选择">
            <el-option
                v-for="item in options"
                :label="item"
                :key = "item"
                :value="item">
            </el-option>
        </el-select>
    </p>
    <p>出发日期：
         <el-date-picker
            v-model="people.value1"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions0">
        </el-date-picker>
    </p>
    </div>
</template>
<script>
    export default {
        name:'myForm',
        props: ['people'],
        data () {
            return {
                //  people:{
                //     name:'',
                //     radio:'',
                //     checkList:[],
                //     select:'',
                //     value1:'',
                // },
                options:['北京','天津','上海'],
                pickerOptions0:{
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
          }
                }
            }
        }
    }
</script>