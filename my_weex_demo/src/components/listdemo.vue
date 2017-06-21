<template>
    <div>
        <Osclist class="list" ref='list' @refresh="onRefresh" @loading="onLoading">
            <cell class="cell" v-for="(value, key) in lists">
                <div :class="[value.expand?'panel': 'expandpanel']">
                    <div style="flex-direction:row;text-align:center;">
                        <div style="flex:1;justify-content:center;flex-direction:row;" @click="callShow(key)">
                            <div>
                                <image style="width:60;height:60;" src="https://img.alicdn.com/tps/i1/TB1nFvPIXXXXXbUXXXXUAkPJpXX-87-87.png"></image>
                            </div>
                            <div style="margin-left:15;margin-top:10">
                                <text style="font-size:30;text-align:center;">item {{key}}</text>
                            </div>
                        </div>
                        <div style="flex:1;justify-content:flex-end;flex-direction:row;margin-right:20">
                                   <switchBtn style="height:50;width:100"></switchBtn>
                        </div>
                    </div>
                </div>
                <div class="line" v-if="!value.expand" />
                <div class="bottompanel" v-if="!value.expand">
                    <text>hello world</text>
                </div>
            </cell>
        </Osclist>
    </div>
</template>
<script>
const modal = weex.requireModule('modal')
const LOADMORE_COUNT = 4
import Osclist from './customview/osc-list.vue'

export default {
    data() {
            return {
                showSwitch: true,
                showLoading: false,
                lists: [{
                    expand: true,
                    loadmore: false
                }, {
                    expand: true,
                    loadmore: false
                }, {
                    expand: true,
                    loadmore: false
                }, {
                    expand: true,
                    loadmore: false
                }, {
                    expand: true,
                    loadmore: false
                }]
            }
        },
        components: {
            Osclist
        },
        beforeCreate: function() {
            // setTimeout(() => {
            //     this.showSwitch = false;
            // }, 0)
        },
        created: function() {
            // setTimeout(() => {
            //     this.showSwitch = false;
            // }, 0)
        },
        methods: {
            callShow(isShow) {
                this.showLoading = true;
                this.lists.$set(isShow, Object.assign({}, this.lists[isShow], {
                        expand: !this.lists[isShow].expand,
                        loadmore: true
                    }))
                    // weex.requireModule('bridgeModule').printLog('isShow ' + isShow);
            },
            onRefresh(e) {
                console.log('onRefresh')
                setTimeout(() => {
                    this.$refs.list.$emit('refreshDone')
                }, 2000)
            },

            onLoading() {
                console.log('onLoading')

                const length = this.lists.length
                for (let i = length; i < length + LOADMORE_COUNT; ++i) {
                    this.lists.push(Object.assign({}, {
                        expand: true,
                        loadmore: false
                    }))
                }

                setTimeout(() => {
                    this.$refs.list.$emit('loadingDone')
                }, 2000)
            }
        }
}
</script>
<style scoped>
.example {
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 60px;
}

.label {
    font-size: 40px;
    line-height: 60px;
    width: 350px;
    color: #666;
    text-align: right;
    margin-right: 20px;
}

.panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    background-color: #eee;
    border-bottom-right-radius: 16;
    border-bottom-left-radius: 16;
    border-top-right-radius: 16;
    border-top-left-radius: 16;
}

.expandpanel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    background-color: #eee;
    border-top-right-radius: 16;
    border-top-left-radius: 16;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.bottompanel {
    width: 600px;
    height: 80px;
    margin-left: 75px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #eee;
    background-color: #eee;
    border-bottom-right-radius: 16;
    border-bottom-left-radius: 16;
}

.loadmore {
    width: 600px;
    height: 80px;
    margin-left: 75px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #b91f1f;
    background-color: #b91f1f;
    border-bottom-right-radius: 16;
    border-bottom-left-radius: 16;
}

.line {
    width: 600px;
    height: 1px;
    margin-left: 75px;
    border-color: #969696;
    background-color: #969696;
}

.text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
}
</style>
