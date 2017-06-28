<template>
    <div class="wrap">
        <Osclist class="list" ref='list' @refresh="onRefresh" @loading="onLoading">
            <cell class="cell" v-for="(value, key) in lists" @click="toNative">
                <div :class="[value.expand?'panel': 'expandpanel']">
                    <div style="flex-direction:row;text-align:center;">
                        <div style="flex:1;justify-content:center;flex-direction:row;text-align:center;">
                            <div>
                                <image style="width:100px;height:100px;text-align:center;margin-top:5" src="http://www.easyicon.net/api/resizeApi.php?id=1204593&size=128"></image>
                            </div>
                            <div style="margin-left:15;">
                                <text class="infotip">15:20 一次</text>
                                <text class="titletip">智能网关</text>
                                <text class="infotip">已开启</text>
                            </div>
                        </div>
                        <div style="flex:1;justify-content:flex-end;flex-direction:row;margin-right:20;margin-top:30">
                            <switchBtn style="height:60;width:100;text-align:center;" :callnative="value.data"></switchBtn>
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
import bus from '../common'

var navigator = weex.requireModule('navigator')

export default {
    data() {
            return {
                showLoading: false,
                lists: [{
                    expand: true,
                    data: ''
                }, {
                    expand: true,
                    data: ''
                }, {
                    expand: true,
                    data: ''
                }, {
                    expand: true,
                    data: ''
                }, {
                    expand: true,
                    data: ''
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
            var self = this;
            bus.methods.registerEvent(bus.apievent.switchEvent, function(e) {
                var json = JSON.stringify(e);
                var bean = JSON.parse(json);
                self.lists[bean.index].data = JSON.stringify(e);
                Vue.set(self.lists, bean.index, self.lists[bean.index]);
            });
        },
        methods: {
            showTip() {
                weex.requireModule('bridgeModule').printLog('showTip ');
            },
            toNative() {
                bus.methods.go('file://assets/components/listinfo.js');
            },
            callShow(isShow) {
                this.showLoading = true;
                this.lists.$set(isShow, Object.assign({}, this.lists[isShow], {
                        expand: !this.lists[isShow].expand,
                        data: ''
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
                        data: ''
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
.wrap {
    background-color: #f0f0f0;
}

.panel {
    width: 600px;
    height: 200px;
    margin-left: 75px;
    margin-top: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background-color: #fff;
    border-bottom-right-radius: 16;
    border-bottom-left-radius: 16;
    border-top-right-radius: 16;
    border-top-left-radius: 16;
}

.expandpanel {
    width: 600px;
    height: 200px;
    margin-left: 75px;
    margin-top: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background-color: #fff;
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
    border-color: #fff;
    background-color: #fff;
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

.infotip {
    font-size: 25px;
    text-align: center;
    color: #b5b5b5;
}

.titletip {
    font-size: 35px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>
