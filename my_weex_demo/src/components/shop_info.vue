<template>
    <div class="wrapper">
        <scroller class="scroller">
            <div>
                <div flex-direction="row" style="flex:1;">
                    <slider class="slider" interval="3000" auto-play="true" offset-x-accuracy="0.1" infinite="false">
                        <div class="slider-pages" v-for="item in itemList">
                            <image class="img" ref="img" resize="cover" :src="item.pictureUrl"></image>
                        </div>
                        <indicator class="slider_indicator"></indicator>
                    </slider>
                </div>
            </div>
            <div class="select_panel" ref="bottompanel" @click="showExpand(!expand)">
                <div class="goodsselectwrap">
                    <text class="expand_text">选择商品</text>
                    <image class="icon-arrow" ref="arrow" :src="arrowSrc"></image>
                </div>
                <div class="line" v-if="expand" />
                <div class="bottompanel" v-if="expand">
                    <div class="goodswrap">
                        <text class="goodstitle">颜色</text>
                        <div class="goodsitem">
                            <text class="goodsbtn">花火银 【i5 8G 双硬盘 940MX】</text>
                            <text class="goodsbtn">花火金 【i6 8G 双硬盘 940MX】</text>
                            <text class="goodsbtn">花火铜 【i7 8G 双硬盘 940MX】</text>
                        </div>
                    </div>
                </div>
            </div>
            <tabbar class="tab" />
            <!--             <Osctoptabbar :tab_top="tab_top_height" :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></Osctoptabbar>
 -->
        </scroller>
    </div>
</template>
<script>
import tabbar from './tab.vue'
var animation = weex.requireModule('animation');

export default {
    data() {
            return {
                arrowSrc: 'https://gw.alicdn.com/tps/TB1O3_aKFXXXXXdXVXXXXXXXXXX-27-23.png',
                tab_top_height: '500px',
                expand: false,
                tabItems: [{
                    index: 0,
                    title: '客厅',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/home.js?item=1',
                    visibility: 'visible'
                }, {
                    index: 1,
                    title: '厨房',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/shop_tab_good_info.js?item=2',
                    visibility: 'visible'
                }, {
                    index: 2,
                    title: '卧室',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/shop_tab_good_info.js?item=3',
                    visibility: 'visible'
                }],
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
            }
        },
        components: {
            tabbar
        },
        methods: {
            tabBarOnClick(e) {
                console.log('tabBarOnClick', e.index)
                    // this.$emit('a-msg','hello world!!!');

            },
            showExpand(e) {
                // weex.requireModule('bridgeModule').log("this.$refs.bottompanel.style.height "+this.$refs.bottompanel.height);
                this.rotate(this.$refs.arrow);
                this.expand = e
            },
            rotate(ref, callback) {
                var self = this;
                if (!self.current_rotate) {
                    self.current_rotate = 0;
                }
                self.current_rotate = self.current_rotate + 180;
                self.anim(ref, {
                    transform: 'rotate(' + self.current_rotate + 'deg)'
                }, 'linear', 100, callback);
            },
            anim(ref, styles, timingFunction, duration, callback) {
                animation.transition(ref, {
                    styles: styles,
                    timingFunction: timingFunction,
                    duration: duration
                }, callback || function() {});
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
    background-color: #f0f0f0;
}

.icon-arrow {
    width: 27;
    height: 23;
    margin-left: 550px;
    margin-top: 25px;
    text-align: center;
}

.goodsselectwrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.goodswrap {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.goodsitem {
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    margin-left: 20px;
}

.goodstitle {
    margin-top: 20px;
}

.goodsbtn {
    font-size: 30px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;
    padding-top: 5px;
    height: 50px;
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

.goodsbtn_press {
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 20px;
    padding-top: 5px;
    height: 50px;
    color: #ffffff;
    border-width: 2px;
    border-style: solid;
    border-color: #303F9F;
    background-color: #303F9F;
    border-bottom-right-radius: 10;
    border-bottom-left-radius: 10;
    border-top-right-radius: 10;
    border-top-left-radius: 10;
    /* flex: 1;
    justify-content: center;
    flex-direction: row;*/
}

.select_panel {
    margin-top: 30px;
    background-color: #ffffff;
}

.bottompanel {
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background-color: #fff;
    border-bottom-right-radius: 16;
    border-bottom-left-radius: 16;
}

.line {
    width: 800px;
    height: 1px;
    border-color: #969696;
    background-color: #969696;
}

.expand_text {
    font-size: 30px;
    color: #333333;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.tab {
    margin-top: 20px;
    background: white;
}

.text {
    font-size: 40px;
    margin: 10px;
}

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
</style>
