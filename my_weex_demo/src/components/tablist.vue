<template>
    <div style="flex-direction: column;">
        <Osctoptabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></Osctoptabbar>
    </div>
</template>
<script>
import Osctoptabbar from './customview/osc-tabbar.vue'
import bus from '../common'

export default {
    data() {
            return {
                listData: [{
                    id: 1,
                    type: 1,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: '美的网关001'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi冰箱0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi空调0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi风扇0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi净化器0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi热水器0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi空调0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi洗衣机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi电视机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi空调0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi洗碗机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi晾衣架0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi消毒柜0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi净化器0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi豆浆机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi空调0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi洗碗机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi烘培机0xAC'
                }, {
                    id: 2,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: 'wifi果汁机0xAC'
                }, {
                    id: 3,
                    type: 1,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204512&size=128',
                    name: '门锁008'
                }, {
                    id: 4,
                    type: 2,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204513&size=128',
                    name: '净化器006'
                }, {
                    id: 5,
                    type: 1,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204510&size=128',
                    name: '场景面板'
                }, {
                    id: 6,
                    type: 3,
                    src: 'http://www.easyicon.net/api/resizeApi.php?id=1204514&size=128',
                    name: '美的网关003'
                }],
                tabItems: [{
                    index: 0,
                    title: '客厅',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list.js?item=1',
                    visibility: 'visible'
                }, {
                    index: 1,
                    title: '厨房',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list.js?item=2',
                    visibility: 'visible'
                }, {
                    index: 2,
                    title: '卧室',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list.js?item=3',
                    visibility: 'visible'
                }, {
                    index: 3,
                    title: '阳台',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list.js?item=4',
                    visibility: 'visible'
                }, {
                    index: 4,
                    title: '卫生间',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list.js?item=5',
                    visibility: 'visible'
                }]
            }
        },
        components: {
            Osctoptabbar
        },
        methods: {
            tabBarOnClick(e) {
                console.log('tabBarOnClick', e.index)
                    // this.$emit('a-msg','hello world!!!');

            }
        },
        created: function() {
            bus.methods.setItem('listData', this.listData);
            // bus.methods.getItem('listData', event => {
            //     console.log('get value:', event.data)
            //     weex.requireModule('bridgeModule').printLog('event.data ' + event.data);
            // })
        },
}
</script>
