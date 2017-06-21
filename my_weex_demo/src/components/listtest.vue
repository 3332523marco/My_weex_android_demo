<template>
    <list>
        <header>
            <div class="center">
                <text style="text-align:center">I am the header</text>
            </div>
        </header>
        <loading onloading="onloading" :display="loadingDisplay" style="width:750;flex-direction: row;justify-content: center;">
            <loading-indicator style="height:160;width:160;color:#3192e1"></loading-indicator>
        </loading>
        <cell class="row" v-for="i in staffs">
            <div class="item">
                <text>{{i.name}}</text>
            </div>
        </cell>
    </list>
</template>
<style>
.row {
    width: 750;
}

.item {
    justify-content: center;
    border-bottom-width: 2;
    border-bottom-color: #c0c0c0;
    height: 100;
    padding: 20;
}

.center {
    border-bottom-width: 2;
    border-bottom-color: #cccccc;
    height: 100;
    padding: 20;
    background-color: #FFFFFF;
    justify-content: center;
}
</style>
<script>
export default {
    data() {
            return {
                staffs: [],
                loadingDisplay: 'show',
                loadingText: 'pull up to load more',
                refreshText: 'pull down to refresh'
            }
        },
        methods: {
            onloading(e) {
                console.log('onloading...');
                this.loadingDisplay = 'show'
                setTimeout(() => {
                    this.loadingDisplay = 'hide'
                }, 1500)
                this.staffs.push({
                    name: 'onloading'
                })
            }
        },
        created: function() {
            this.refreshDisplay = 'show',
                this.staffs = [{
                    name: 'inns'
                }, {
                    name: 'connon'
                }, {
                    name: 'baos'
                }, {
                    name: 'anna'
                }, {
                    name: 'dolley'
                }, {
                    name: 'lucy'
                }, {
                    name: 'john'
                }, {
                    name: 'lily'
                }, {
                    name: 'locke'
                }, {
                    name: 'jack'
                }, {
                    name: 'danny'
                }, {
                    name: 'rose'
                }, {
                    name: 'harris'
                }, {
                    name: 'lotus'
                }, {
                    name: 'louis'
                }];
        }
}
</script>
