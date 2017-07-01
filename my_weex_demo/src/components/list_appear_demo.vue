<template>
    <div>
        <div ref="test" @click="move" class="box"></div>
        <list ref="list" class="list">
            <cell v-for="(v,i) in rows" append="tree" :index="i" :key="i" class="row" @appear="onappear(i, $event)" offset-accuracy="10" @disappear="ondisappear(i, $event)">
                <div class="item">
                    <text class="item-title">row {{v.id}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>
<style scoped>
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
    height: 100px;
    padding: 20px;
}

.item:active {
    background-color: #00BDFF;
}

.item-title {}

.box {
    width: 900px;
    height: 100px;
    background-color: #DDD;
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
        onappear: function(idx, e) {
            var appearId = this.rows[idx].id;
            console.log('+++++', appearId);
            var appearIds = this.appearIds;
            appearIds.push(appearId);
            this.getMinAndMaxIds(appearIds);
        },
        ondisappear: function(idx, e) {
            var disAppearId = this.rows[idx].id;
            console.log('+++++', disAppearId);
            var appearIds = this.appearIds;
            var index = appearIds.indexOf(disAppearId);
            if (index > -1) {
                appearIds.splice(index, 1);
            }
            this.getMinAndMaxIds(appearIds);
        },
        getMinAndMaxIds: function(appearIds) {
            appearIds.sort(function(a, b) {
                return a - b;
            });

            if (!this.isInit) {
                return;
            }
            if (appearIds[0] == 1) {
                //展示
                this.startAnimaition(this.$refs.test, 0);
                this.startAnimaition(this.$refs.list, 0);
            } else {
                //收缩
                this.startAnimaition(this.$refs.test, -100);
                this.startAnimaition(this.$refs.list, -100);
            }
            // this.appearIds = appearIds;
            // this.appearMax = appearIds[appearIds.length - 1];
            // this.appearMin = appearIds[0];
        },
        startAnimaition(ref, y) {
            var index = bus.methods.checkPosition(ref, this.animations);
            if (index != -1) {
                weex.requireModule('bridgeModule').log("testEl " + ref);
                return;
            }
            weex.requireModule('bridgeModule').log("push " + ref);

            this.animations.push(ref);
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
                weex.requireModule('bridgeModule').log("finished "+ref);
                bus.methods.remove(ref, this.animations);
                // modal.toast({ message: 'animation finished.' })
            })
        }
    },
    data: function() {
        return {
            isInit: false,
            animations: [],

            appearMin: 1,
            appearMax: 1,
            appearIds: [],
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
