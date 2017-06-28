<template>
    <div class="wrap">
        <div class="listwrap">
            <list class="list">
                <cell class="cell" v-for="num in lists">
                    <div class="panel">
                        <text class="text">{{num}}</text>
                    </div>
                </cell>
            </list>
            <text class="unit">时</text>
            <list class="list">
                <cell class="cell" v-for="num in lists">
                    <div class="panel">
                        <text class="text">{{num}}</text>
                    </div>
                </cell>
            </list>
            <text class="unit">时</text>
        </div>
        <div class="select_datewrap">
            <div v-for="(value, key) in dateselect">
                <text @click="updateSelectBtn(key)" :class="[value.ischeck?'datebtn_press': 'datebtn']">{{value.date}}</text>
            </div>
        </div>
        <div class="line" />
        <div class="datewrap">
            <div v-for="(value, key) in datelist">
                <text @click="updateCheckBtn(key)" :class="[value.ischeck?'datebtn_press': 'datebtn']">{{value.date}}</text>
            </div>
        </div>
        <div class="select_panel" @click="toTabList()">
            <text class="select_item">选择设备 {{selectName}}</text>
        </div>
    </div>
</template>
<script>
const modal = weex.requireModule('modal')
const LOADMORE_COUNT = 4
import homechild from './homechild.vue'
import mixins from '../mixins'
import bus from '../common'
var navigator = weex.requireModule('navigator')

export default {
    data() {
            return {
                selectName: '',
                lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                dateselect: [{
                    date: '重复',
                    ischeck: true
                }, {
                    date: '一次',
                    ischeck: false
                }],
                datelist: [{
                    date: '一',
                    ischeck: false
                }, {
                    date: '二',
                    ischeck: false
                }, {
                    date: '三',
                    ischeck: false
                }, {
                    date: '四',
                    ischeck: false
                }, {
                    date: '五',
                    ischeck: false
                }, {
                    date: '六',
                    ischeck: false
                }, {
                    date: '七',
                    ischeck: false
                }]
            }
        },
        methods: {
            updateSelectBtn(index) {
                if (this.dateselect[index].ischeck) {
                    return
                }
                if (index == 0) {
                    //重复
                    this.dateselect.$set(0, Object.assign({}, this.dateselect[0], {
                        ischeck: true,
                        date: this.dateselect[0].date
                    }))
                    this.dateselect.$set(1, Object.assign({}, this.dateselect[1], {
                        ischeck: false,
                        date: this.dateselect[1].date
                    }))
                } else {
                    //一次
                    this.dateselect.$set(0, Object.assign({}, this.dateselect[0], {
                        ischeck: false,
                        date: this.dateselect[0].date
                    }))
                    this.dateselect.$set(1, Object.assign({}, this.dateselect[1], {
                        ischeck: true,
                        date: this.dateselect[1].date
                    }))
                }
                this.initCheckStatus(-1);
            },
            updateCheckBtn(index) {
                if (!this.dateselect[0].ischeck) {
                    if (this.datelist[index].ischeck) {
                        return;
                    }
                    this.datelist.$set(index, Object.assign({}, this.datelist[index], {
                        ischeck: !this.datelist[index].ischeck,
                        date: this.datelist[index].date
                    }))
                   this.initCheckStatus(index);
                } else {
                    this.datelist.$set(index, Object.assign({}, this.datelist[index], {
                        ischeck: !this.datelist[index].ischeck,
                        date: this.datelist[index].date
                    }))
                }
            },
            initCheckStatus(index) {
                var length = this.datelist.length;
                for (let i = 0; i < length; i++) {
                    if (index != i) {
                        this.datelist.$set(i, Object.assign({}, this.datelist[i], {
                            ischeck: false,
                            date: this.datelist[i].date
                        }))
                    }
                }
            },
            toTabList() {
                bus.methods.go('file://assets/components/tablist.js');
            }
        },
        created: function() {


            // var url = this.$getConfig().bundleUrl;  
            // bus.methods.Coder.name = 'kkwww';

            var self = this;
            bus.methods.registerEvent('listinfo', function(e) {
                var bean = JSON.parse(JSON.stringify(e));
                self.selectName = bean.data;
            });
            // weex.requireModule('bridgeModule').events('listinfo.js');
        },
        beforeDestroy: function() {
            weex.requireModule('bridgeModule').printLog('beforeDestroy ');
        }
}
</script>
<style scoped>
.wrap {
    background-color: #f0f0f0;
}

.select_panel {
    margin-top: 60px;
    height: 100px;
    background-color: #ffffff;
}

.select_item {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    font-size: 30px;
    color: #333333;
}

.listwrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: 300px;
    background-color: #ffffff;
}

.select_datewrap {
    margin-top: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: 80px;
    background-color: #ffffff;
    text-align: center;
}

.datewrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: 80px;
    background-color: #ffffff;
    text-align: center;
}

.panel {
    width: 50px;
    height: 50px;
    margin-left: 150px;
    margin-right: 0px;
    margin-top: 5px;
    margin-bottom: 15px;
    flex-direction: column;
    /*    justify-content: center;
*/
}

.unit {
    margin-top: 150px;
    margin-right: 120px;
    font-size: 30px;
    color: #848484;
}

.line {
    height: 1px;
    width: 100%;
    color: #b5b5b5;
}

.datebtn {
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    padding-top: 5px;
    height: 50px;
    width: 80px;
    color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-color: #8e8e8e;
    background-color: #8e8e8e;
    border-bottom-right-radius: 10;
    border-bottom-left-radius: 10;
    border-top-right-radius: 10;
    border-top-left-radius: 10;
    /* flex: 1;
    justify-content: center;
    flex-direction: row;*/
}

.datebtn_press {
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    padding-top: 5px;
    height: 50px;
    width: 80px;
    color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-color: #41aefa;
    background-color: #41aefa;
    border-bottom-right-radius: 10;
    border-bottom-left-radius: 10;
    border-top-right-radius: 10;
    border-top-left-radius: 10;
    /* flex: 1;
    justify-content: center;
    flex-direction: row;*/
}

.text {
    font-size: 30px;
    text-align: center;
    color: #848484;
}
</style>
