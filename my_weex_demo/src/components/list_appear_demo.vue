<template>
    <div>
        <div ref="test" class="box">
            <div flex-direction="row" style="flex:1;">
                <slider class="slider" interval="3000" auto-play="true" offset-x-accuracy="0.1" @scroll="scrollHandler" @change="changeHandler" infinite="false">
                    <div class="slider-pages" v-for="item in itemList">
                        <image class="img" resize="cover" :src="item.pictureUrl"></image>
                    </div>
                    <indicator class="slider_indicator"></indicator>
                </slider>
            </div>
            <div class="tabwarp">
                    <image class="tabimg" src="img/tab1.png"></image>
                    <image class="tabimg" src="img/tab2.png"></image>
                    <image class="tabimg" src="img/tab3.png"></image>
            </div>
        </div>
        <list ref="list" class="list" @scroll="scrollHandler">
            <cell v-for="(v,i) in rows" append="tree" :index="i" :key="i" class="row">
                <div class="item">
                    <text class="item-title">row {{v.id}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>
<style scoped>
.img {
    width: 800px;
    height: 360px;
}

.title {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #ff0000;
    font-size: 48px;
    font-weight: bold;
    background-color: #eeeeee;
}

.slider {
    flex-direction: row;
    width: 800px;
    height: 360px;
}

.slider-pages {
    flex-direction: row;
    width: 714px;
    height: 360px;
}

.slider_indicator {
    width: 714px;
    height: 310px;
    position: absolute;
    top: 160px;
    left: 1px;
    item-color: #8b8b8b;
    item-selectedColor: #fff;
    item-size: 20px;
}

.tabwarp {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    background-color: #ffffff;
    text-align: center;
}

.tabimg {
    margin-left: 120px;
    margin-bottom: 15px;
    width: 96px;
    height: 96px;
}

.list {
    height: 1000px
}

.count {
    font-size: 48px;
    margin: 10px;
}

.indicator {
    height: 40px;
    width: 40px;
    color: #45b5f0;
}

.row {
    width: 750px;
}

.item {
    justify-content: center;
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    height: 130px;
    padding: 20px;
}

.item:active {
    background-color: #00BDFF;
}

.item-title {
    margin-top:10px;
    margin-bottom: 10px;
    font-size:30px;
}

.box {
    width: 900px;
    height: 500px;
    background-color: #fff;
}
</style>
<script>
import bus from '../common'
const animation = weex.requireModule('animation')
module.exports = {
    created: function() {
        weex.requireModule('bridgeModule').log("created ");

    },
    beforeMount: function() {
        weex.requireModule('bridgeModule').log("beforeMount ");

    },
    mounted: function() {
        setTimeout(() => {
            this.isInit = true;
        }, 20)
    },
    methods: {
        scrollHandler: function(e) {
            this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
            this.topbarStyle = -e.offsetXRatio * 750
        },
        changeHandler: function(e) {
            this.scrollHnadlerCallCount = 0;
        },
        scrollHandler: function(e) {
            weex.requireModule('bridgeModule').log("e.contentOffset.y " + e.contentOffset.y);
            if (e.contentOffset.y == 0 || e.contentOffset.y >= -10) {
                //展开
                if (!this.expend) {
                    this.startAnimaition(this.$refs.test, 0);
                    this.startAnimaition(this.$refs.list, 0);
                    this.expend = true;
                }
            } else {
                //收缩
                if (this.expend) {
                    this.startAnimaition(this.$refs.test, -360);
                    this.startAnimaition(this.$refs.list, -360);
                    this.expend = false;
                }
            }
        },
        startAnimaition(ref, y) {

            animation.transition(ref, {
                styles: {
                    color: '#FF0000',
                    transform: 'translate(0px,' + y + ')',
                    transformOrigin: 'center center'
                },
                duration: 200, //ms
                timingFunction: 'ease',
                delay: 0 //ms
            }, function() {
                // modal.toast({ message: 'animation finished.' })
            })
        }
    },
    data: function() {
        return {

            scrollHnadlerCallCount: 0,
            itemList: [{
                itemId: '520421163634',
                title: 'item1',
                pictureUrl: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'
            }, {
                itemId: '522076777462',
                title: 'item2',
                pictureUrl: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'
            }, {
                itemId: '522076777462',
                title: 'item3',
                pictureUrl: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'
            }, {
                itemId: '522076777467',
                title: 'item4',
                pictureUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491837948&di=3dcecd1b1d709196873a91f9fd585962&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160304%2Fmp61863731_1457078539188_3.gif'
            }],

            expend: true,
            rows: [{
                id: 1
            }, {
                id: 2
            }, {
                id: 3
            }, {
                id: 4
            }, {
                id: 5
            }, {
                id: 6
            }, {
                id: 7
            }, {
                id: 8
            }, {
                id: 9
            }, {
                id: 10
            }, {
                id: 11
            }, {
                id: 12
            }, {
                id: 13
            }, {
                id: 14
            }, {
                id: 15
            }, {
                id: 16
            }, {
                id: 17
            }, {
                id: 18
            }, {
                id: 19
            }, {
                id: 20
            }, {
                id: 21
            }, {
                id: 22
            }, {
                id: 23
            }, {
                id: 24
            }, {
                id: 25
            }, {
                id: 26
            }, {
                id: 27
            }, {
                id: 28
            }, {
                id: 29
            }]
        }
    }
}
</script>
