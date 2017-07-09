<template>
    <div>
        <div ref="test" class="box">
            <div flex-direction="row" style="flex:1;">
                <slider class="slider" interval="3000" auto-play="true" offset-x-accuracy="0.1" @scroll="sliderscrollHandler" @change="changeHandler" infinite="false">
                    <div class="slider-pages" v-for="item in itemList">
                        <image class="img" ref="img" resize="cover" :src="item.pictureUrl"></image>
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
        <shoplist ref='shoplist' :fus="listscrollHandler"/>
    </div>
</template>
<style scoped>
.img {
    width: 800px;
    height: 360px;
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
    margin-bottom: 25px;
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
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
}

.box {
    width: 900px;
    height: 500px;
    background-color: #fff;
}
</style>
<script>
import bus from '../common'
import shoplist from './shop_list.vue'
module.exports = {
    created: function() {
        // setTimeout(() => {
        //     this.$refs.shoplist.setScrollCallback(function(e) {
        //         weex.requireModule('bridgeModule').log("e.contentOffset.y " + e.contentOffset.y);
        //         if (e.contentOffset.y == 0 || e.contentOffset.y >= -10) {
        //             //展开
        //             if (!this.expend) {
        //                 bus.methods.startAnimaition(this.$refs.test, 0);
        //                 bus.methods.startAnimaition(this.$refs.shoplist, 0);
        //                 this.expend = true;
        //             }
        //         } else {
        //             //收缩
        //             if (this.expend) {
        //                 bus.methods.startAnimaition(this.$refs.test, -360);
        //                 bus.methods.startAnimaition(this.$refs.shoplist, -360);
        //                 this.expend = false;
        //             }
        //         }
        //     });
        // }, 1000)
    },
    beforeMount: function() {
        weex.requireModule('bridgeModule').log("beforeMount ");

    },
    mounted: function() {
        setTimeout(() => {
            this.isInit = true;
        }, 20)
    },
    components: {
        shoplist
    },
    methods: {
        sliderscrollHandler: function(e) {
            this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
            this.topbarStyle = -e.offsetXRatio * 750
        },
        changeHandler: function(e) {
            this.scrollHnadlerCallCount = 0;
        },
        listscrollHandler: function(e,ref) {
            if (e.contentOffset.y == 0 || e.contentOffset.y >= -10) {
                //展开
                if (!this.expend) {
                    bus.methods.startAnimaition(this.$refs.test, 0);
                    bus.methods.startAnimaition(ref, 0);
                    this.expend = true;
                }
            } else {
                //收缩
                if (this.expend) {
                    bus.methods.startAnimaition(this.$refs.test, -360);
                    bus.methods.startAnimaition(ref, -360);
                    this.expend = false;
                }
            }
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
            expend: true
        }
    }
}
</script>
