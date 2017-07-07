<template>
    <div class="wrapper">
        <scroller :class="[tabType == 1?'tabbar_bottom': 'tabbar_top']" :style="{height:height }" ref="tabbar" append="tree" scroll-direction="horizontal">
            <tabitem v-for="(item, index) in tabItems" :key="index" :type="tabType" :height="height" :index="item.index" :icon="item.icon" :title="item.title" :titleColor="item.titleColor" @tabItemOnClick="tabItemOnClick">
            </tabItem>
        </scroller>
        <embed :class="[tabType == 1?'content_bottom': 'content_top']" ref="content" :style="{ visibility: item.visibility }" v-for="(item, index) in tabItems" :key="index" :src="item.src" type="weex">
        </embed>
    </div>
</template>
<style>
.wrapper {
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.content_bottom {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 0;
    margin-bottom: 98px;
}

.tabbar_bottom {
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.tabbar_top {
    flex-direction: row;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 20px;
    margin-left: 20px;
    right: 0;
}

.content_top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 98px;
    margin-bottom: 0;
}
</style>
<script>
export default {
    props: {
        height: {
            default: 88
        },
        tabType: {
            default: 0
        },
        tabItems: {
            default: []
        },
        selectedColor: {
            default: '#303F9F'
        },
        unselectedColor: {
            default: '#979797'
        }
    },
    data() {
        return {
            selectedIndex: 0
        }
    },
    components: {
        tabitem: require('./osc-tabitem.vue')
    },
    created() {

        this.select(this.selectedIndex)

    },
    methods: {
        tabItemOnClick(e) {
            this.selectedIndex = e.index
            this.select(e.index)
            this.$emit('tabBarOnClick', e)
        },
        select(index) {
            for (let i = 0; i < this.tabItems.length; i++) {
                let tabItem = this.tabItems[i]
                if (i == index) {
                    tabItem.icon = tabItem.selectedImage
                    tabItem.titleColor = this.selectedColor
                    tabItem.visibility = 'visible'
                } else {
                    tabItem.icon = tabItem.image
                    tabItem.titleColor = this.unselectedColor
                    tabItem.visibility = 'hidden'
                }
            }
        }
    }
}
</script>
