export default {
    methods: {
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        test68() {
            weex.requireModule('bridgeModule').printLog('test68 ');
        }
    }
}
