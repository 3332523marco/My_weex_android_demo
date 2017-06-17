<template>
    <div class="select-container">
        <div class="content">
            <slot></slot>
        </div>
        <div class="mask" ref="mask" @click="switchView"></div>
        <div class="options" ref="options">
            <div v-for="s in status" class="cell" @click="onItemClick('id')">
                <text :class="['name',id==statusId?'current': '']">{{s.name}}</text>
                <image class="icon-curr-flag" :src="flagSrc" v-if="id==statusId"></image>
            </div>
        </div>
        <div class="select" @click="switchView">
            <text class="current-text">{{statusName}}</text>
            <image class="icon-arrow" ref="arrow" :src="arrowSrc"></image>
        </div>
    </div>
    <!-- weex not support  z-index -->
</template>
<style>
/* item height: 90 ; */

.select-container {
    /*  flex-direction: column;
    position: relative;
    z-index: 1000;
    justify-content: center;*/
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
}

.content {
    width: 750;
    margin-top: 90;
}

.mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    flex: 1;
    width: 750;
    background-color: rgba(0, 0, 0, .5);
    visibility: hidden;
}

.select {
    width: 650;
    height: 130;
    margin-left: 50;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1;
    border-style: solid;
    border-color: #ddd;
    background-color: #eee;
    border-radius: 16;
    z-index: 1001;
    position: absolute;
    top: 0;
}

.current-text {
    color: #333;
    font-size: 33;
    margin-left: 30;
    flex: 1;
}

.icon-arrow {
    width: 27;
    height: 23;
    margin-right: 30;
}

.options {
    position: relative;
/*     top: -380;
*/    width: 650;
    margin-left: 50;
    background-color: #fff;
    transform-origin: center center;
    border-bottom-width: 1;
    border-style: solid;
    border-color: #ddd;
    background-color: #eee;
    border-radius: 16;
}

.cell {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 650;
    height: 130;
    padding-left: 30;
    padding-right: 30;
    border-bottom-width: 1;
    border-style: solid;
    border-color: #ddd;
}

.name {
    color: #333;
    font-size: 33;
    flex: 1;
}

.icon-curr-flag {
    width: 32;
    height: 32;
}

.current {
    color: #0088FB;
}
</style>
<script>
var animation = weex.requireModule('animation');

module.exports = {
    data() {
        return {
            current_translate: '',
            statusId: '0',
            status: [{
                id: '0',
                name: 'All'
            }, {
                id: '1',
                name: 'Doing'
            }, {
                id: '2',
                name: 'Done'
            }],
            flagSrc: 'https://gw.alicdn.com/tps/TB11a2lKFXXXXbVXpXXXXXXXXXX-32-32.png',
            arrowSrc: 'https://gw.alicdn.com/tps/TB1O3_aKFXXXXXdXVXXXXXXXXXX-27-23.png'
        }
    },
    computed: {
        statusName: {
            get() {
                var id = this.statusId;
                return this.status.filter(function(s) {
                    return s.id == id
                })[0].name;
            }
        }
    },
    mounted() {
            weex.requireModule('bridgeModule').printLog("refww " + this.$refs.options.offsetHeight);
    },
    methods: {
        switchView() {
            this.toggleMaskVisible();
            weex.requireModule('bridgeModule').printLog("ref " + this.$refs.options.offsetHeight);

            this.opacity(this.$refs.mask);
            this.collapse(this.$refs.options);
            this.rotate(this.$refs.arrow);

        },

        onItemClick(vid) {
            weex.requireModule('bridgeModule').printLog("log " + vid);
            // this.updateStatus(vid);
            // this.switchView();
            // this.$dispatch('statuschange', {
            //     id: this.statusId,
            //     name: this.statusName
            // })
        },

        updateStatus(id) {
            this.statusId = id;
        },

        toggleMaskVisible() {
            this.current_showMask = !this.current_showMask;
            var visibility = this.current_showMask ? 'visible' : 'hidden';
            this.$refs.mask.setClassStyle({
                visibility: visibility
            });
        },

        collapse(ref, callback) {
            var platform = this.$getConfig().env.platform;
            var translate = 'translate(0, -100%)'; // Web need % translate(0, 100%);
            if (platform == 'iOS') {
                translate = 'translate(0, 270)'; // ios bug && fixing
            }
            this.current_translate = this.current_translate ? '' : translate;
            this.anim(ref, {
                transform: this.current_translate
            }, 'ease', 100, callback);
        },

        opacity(ref, callback) {
            var self = this;
            self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
            self.anim(ref, {
                opacity: self.current_opacity
            }, 'ease', 100, callback);
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
    }
}
</script>
