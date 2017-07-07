const globalEvent = weex.requireModule('globalEvent');
const storage = weex.requireModule('storage')
const navigator = weex.requireModule('navigator')
const animation = weex.requireModule('animation')

exports.methods = {
    registerEvent(event, callback) {
        var jscallback = callback;
        globalEvent.addEventListener(event, callback);
    },
    setItem(key, value) {
        storage.setItem(key, value, event => {
            console.log('set success')
        })
    },
    getItem(key, callback) {
        storage.getItem(key, callback)
    },
    removeItem(key) {
        storage.removeItem(key, event => {
            console.log('delete value:', event.data)
            this.state = 'deleted'
        })
    },
    getAll(key) {
        storage.getAllKeys(key)
    },
    getItemId(url) {
        var strs = url.split("item=");
        return strs[1];
    },
    getBaseParams(key, data) {
        var json = {};
        json.type = key;
        json.data = data;
        return json;
    },
    sendNative(data) {
        weex.requireModule('bridgeModule').events(data);
    },
    go(url) {
        navigator.push({
            url: url,
            animated: "true"
        }, event => {
            // modal.toast({
            //     message: 'callback: ' + event
            // })
        })
    },
    goBack() {
        navigator.pop({
            animated: "true"
        }, () => {})
    },
    checkPosition(val, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] == val) return i;
        }
        return -1;
    },
    remove(val, list) {
        var index = this.checkPosition(val, list);
        if (index > -1) {
            list.splice(index, 1);
        }
    },
    startAnimaition(ref, y) {

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
            // modal.toast({ message: 'animation finished.' })
        })
    }
}

exports.apievent = {
    switchEvent: 'switchEvent'
}
