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
        <div class="tip">重复</div>
        <div class="datewrap">
            <div v-for="(value, key) in datelist">
                <text @click="updateCheckBtn(key)" :class="[value.ischeck?'datebtn_press': 'datebtn']">{{value.date}}</text>
            </div>
        </div>
    </div>
</template>
<script>
const modal = weex.requireModule('modal')
const LOADMORE_COUNT = 4
export default {
    data() {
            return {
                lists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
            updateCheckBtn(index) {
                this.datelist.$set(index, Object.assign({}, this.datelist[index], {
                    ischeck: !this.datelist[index].ischeck,
                    date: this.datelist[index].date
                }))
            }
        }
}
</script>
<style scoped>
.wrap {
    background-color: #f0f0f0;
}

.listwrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    height: 300px;
    background-color: #ffffff;
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
    height: 60px;
    margin-left: 150px;
    margin-right: 0px;
    margin-top: 15px;
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

.tip {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    font-size: 30px;
    text-align: center;
    color: #333333;
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
