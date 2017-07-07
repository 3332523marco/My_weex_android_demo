<template>
    <div class="box">
        <div flex-direction="row" style="flex:1;">
            <slider class="slider" interval="3000" auto-play="true" offset-x-accuracy="0.1" @scroll="scrollHandler" @change="changeHandler" infinite="false">
                <div class="slider-pages" v-for="item in itemList">
                    <image class="img" resize="cover" :src="item.pictureUrl"></image>
                </div>
                <indicator class="indicator"></indicator>
            </slider>
        </div>
    </div>
</template>
<style scoped>
.img {
    width: 800px;
    height: 260px;
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
    margin: 5px;
    width: 800px;
    height: 230px;
}

.slider-pages {
    flex-direction: row;
    width: 714px;
    height: 230px;
}

.indicator {
    width: 714px;
    height: 310px;
    position: absolute;
    top: 50px;
    left: 1px;
    item-color: red;
    item-selectedColor: blue;
    item-size: 20px;
}

.box {
    width: 900px;
    height: 300px;
    background-color: #DDD;
}
</style>
<script>
module.exports = {
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
            }]
        }
    },
    methods: {
        // scrollHandler: function(e) {
        //     this.scrollHnadlerCallCount = this.scrollHnadlerCallCount + 1;
        //     this.topbarStyle = -e.offsetXRatio * 750
        // },
        // changeHandler: function(e) {
        //     this.scrollHnadlerCallCount = 0;
        // }
    }
}
</script>
\ No newline at end of file
