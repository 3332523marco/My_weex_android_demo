<template>
    <div>
        <div class="wrap">
            <div class="wrap" v-for='(v,i) in menu' v-on:click='light(i)'>
                <text :class="[flag==i?'onactive':'on']">{{v.name}}</text>
            </div>
        </div>
        <Shopinfo v-if="type == 0" />
        <Home v-if="type == 1" />
        <Listdemo v-if="type == 3" />
    </div>
</template>
<script>
import Shopinfo from './shop_tab_good_info.vue'
import Home from './home.vue'
import Listdemo from './listinfo.vue'

export default {
    data() {
            return {
                type: 0,

                menu: [{
                    'name': '语文'
                }, {
                    'name': '数学'
                }],
                flag: 0,
                result: true
            }
        },
        components: {
            Shopinfo,
            Home,
            Listdemo
        },
        methods: {
            light(index) {
                this.flag = index;
                this.type = index;
                weex.requireModule('bridgeModule').log("index " + index);

            },
            toggle: function() {
                this.result = !this.result
            }
        }
}
</script>
<style scoped>
.wrap {
    justify-content: center;
    flex-direction: row;
    align-items: center;
    text-align: center;
    background-color: white;
}

.onactive {
    color: #303F9F;
    border-bottom-width: 10px;
    border-bottom-color: #303F9F;
    width: 350px;
    padding-bottom: 15px;
    padding-top: 15px;
    flex: 1;
    text-align: center;
}

.on {
    color: black;
    padding-bottom: 15px;
    padding-top: 15px;
    border-bottom-width: 10px;
    border-bottom-color: white;
    width: 350px;
    flex: 1;
    text-align: center;
}
</style>
