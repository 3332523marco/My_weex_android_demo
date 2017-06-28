<template>
    <div class="wrapper">
        <text class="button" @click="callNative">callNative2</text>
        <homechild/>
        <!--  <SwitchBar class="dropdown" :status-id="status">
        </SwitchBar> -->
        <richtext tel="1391486934">点击跳转到拨打电话</richtext>
        <Listdemo ref="test" />
    </div>
</template>
<script>
// import Child from './homechild.vue'
import Listdemo from './listdemo.vue'

export default {
    data() {
            return {
                showLoading: 'hide',
                status: '1',
                img: 'http://gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg'
            }
        },
        // components: {
        //     Child
        // },
        methods: {
            callNative() {
                this.$refs.test.showTip();
                // var mode = weex.requireModule('bridgeModule');
                // mode.printLogs("weex is beach", function(map) {
                //     //modal.toast({title:"wori",duration:2})
                //     //console.log(map);
                //     //调用nativie中的方法打日志，得出回调成功了
                //     weex.requireModule('bridgeModule').log(map);
                // })
            }
        },
        created: function() {
           
        }
}
</script>
<style scoped>
.wrapper {
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    /*    flex-direction: column;
*/
    /*    justify-content: center;
*/
}

.dropdown {
    justify-content: center;
    align-content: stretch;
    position: relative;
    z-index: 100;
}

.button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
}
</style>
