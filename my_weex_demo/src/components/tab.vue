<template>
    <div class="wrap">
        <div class="wrap" v-for='(v,i) in menu' v-on:click='light(i)'>
            <text :class="[flag==i?'onactive':'on']">{{v.name}}</text>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                menu: [{
                    'name': '语文'
                }, {
                    'name': '数学'
                }, {
                    'name': '自然'
                }, {
                    'name': '社会'
                }, {
                    'name': '和谐'
                }],
                flag: 0,
                result: true
            }
        },
        methods: {
            light(index) {
                this.flag = index;
            },
            toggle: function() {
                this.result = !this.result
            }
        }
}
</script>
<style scoped>
.wrap {
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
}

.onactive {
    color: red;
    border-bottom-width: 10px;
    border-bottom-color: red;
}

.on {
    color: black;
    border-bottom-width: 10px;
    border-bottom-color: white;
}
</style>
