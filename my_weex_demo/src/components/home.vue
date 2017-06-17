<template>
    <div class="wrapper">
        <text  class="button" @click="callNative">callNative2</text>
        <child/>
        <SwitchBar class="dropdown" :status-id="status">
        </SwitchBar>
         
    </div>
</template>
<script>
import Child from './child.vue'
import SwitchBar from './switchbar.vue'

export default {
    data() {
            return {
                showLoading: 'hide',
                status: '1'
            }
        },
        components: {
            Child,
            SwitchBar
        },
        methods: {
            callNative() {
                var mode = weex.requireModule('bridgeModule');
                mode.printLogs("weex is beach", function(map) {
                    //modal.toast({title:"wori",duration:2})
                    //console.log(map);
                    //调用nativie中的方法打日志，得出回调成功了
                    weex.requireModule('bridgeModule').log(map);
                })
            }
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
