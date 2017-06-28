<template>
    <div>
        <list class="list" ref='list' @refresh="onRefresh" @loading="onLoading">
            <cell class="row" v-for="(value, i) in lists" :index="i" v-if="value.type == itemId" @click="onItemClick(i)">
                <div class="item">
                    <div>
                        <image style="width:80;height:80;text-align:center;" :src="value.src"></image>
                    </div>
                    <text class="item_text">{{value.name}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>
<script>
const modal = weex.requireModule('modal')
const LOADMORE_COUNT = 4
import bus from '../common'
var navigator = weex.requireModule('navigator')

export default {
    data() {
            return {
                lists: [],
                itemId: ''
            }
        },
        beforeCreate: function() {

        },
        created: function() {
            var url = this.$getConfig().bundleUrl;
            this.itemId = bus.methods.getItemId(url);
            bus.methods.getItem('listData', event => {
                this.lists = JSON.parse(event.data);
            })
            bus.methods.removeItem('listData');
        },
        methods: {
            onItemClick(index) {
                var selectName = this.lists[index].name;
                bus.methods.sendNative(bus.methods.getBaseParams("listinfo.js", selectName));
                bus.methods.goBack();
            },
            onRefresh(e) {

            },

            onLoading() {
                console.log('onLoading')

            }
        }
}
</script>
<style scoped>
.row {
    width: 750px;
}

.item {
    border-bottom-width: 2px;
    border-bottom-color: #c0c0c0;
    padding: 20px;
    flex: 1;
    flex-direction: row;
}

.item_text {
    margin-left: 25px;
    text-align: center;
    margin-top: 25px;
    font-size: 30px;
}
</style>
