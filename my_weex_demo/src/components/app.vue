<template>
    <div>
        <Osclist class="list" ref='list' @refresh="onRefresh" @loading="onLoading">
            <cell class="row" v-for="(i, row) in rows" :index="i">
                <!--  <div class="item">
                    <text class="item-title">row {{row}}</text>
                </div> -->
                <div class="item">
                    <div>
                        <image style="width:80;height:80;text-align:center;" src="http://www.easyicon.net/api/resizeApi.php?id=1204593&size=128"></image>
                    </div>
                    <div class="item_text">
                        <text class="item-title">row {{row}}</text>
                    </div>
                </div>
            </cell>
        </Osclist>
    </div>
</template>
<style scoped>
.list {}

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
<script>
import Osclist from './customview/osc-list.vue'

export default {
    props: {
        rows: {
            default: function() {
                return [{
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
        },
        moreRows: {
            default: function() {
                return [{
                    id: 30
                }, {
                    id: 31
                }, {
                    id: 32
                }, {
                    id: 33
                }]
            }
        }
    },
    components: {
        Osclist
    },
    methods: {
        onRefresh(e) {
            console.log('onRefresh')
            setTimeout(() => {
                this.$refs.list.$emit('refreshDone')
            }, 2000)
        },

        onLoading() {
            console.log('onLoading')
            if (this.rows.length <= 33) {
                this.rows.push(this.moreRows[this.rows.length - 29])
                this.rows.push(this.moreRows[this.rows.length - 29])
                this.rows.push(this.moreRows[this.rows.length - 29])

                setTimeout(() => {
                    this.$refs.list.$emit('loadingDone')
                }, 2000)
            }
        }
    }
}
</script>
