(function() {
    var KEY_UP = 38,
        KEY_DOWN = 40,
        KEY_LEFT = 37,
        KEY_RIGHT = 39,
        KEY_A = 64,
        KEY_S = 83,
        KEY_D = 68,
        KEY_W = 87;
    
    var DebugScreen = window.Screens.DebugScreen = function() {
        this.keyState = {};
    };
    _.extend(DebugScreen.prototype, Screens.BaseScreen, {
        render: function(context, width, height) {
            context.clearRect(0, 0, width, height);
            context.fillStyle = 'blue';
            context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
            context.fillStyle = 'red';
            context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
            context.fillStyle = 'green';
            context.fillRect(Math.random() * width, Math.random() * height, 10, 10);

            renderFps(context);
            
            context.font = '12px Georgia';
            context.fillText(JSON.stringify(this.keyState), 10, 360);

        },
        keyUp: function(keyCode) {
            this.keyState[keyCode] = false;
        },
        keyDown: function(keyCode) {
            this.keyState[keyCode] = true;
        }
    });
    
    var sampleSize = 120;
    var sampleIndex = 0;
    var sampleList = [];
    var sampleSum = 0;
    var lastUpdated = new Date().getTime();
    var renderFps = function(context) {
        var fps = Math.round(1000 / (new Date().getTime() - lastUpdated));
        sampleSum -= sampleList[sampleIndex] || 0;
        sampleSum += fps;
        sampleList[sampleIndex++] = fps;
        sampleIndex %= sampleSize;

        context.fillStyle = 'white';
        context.font = '16px Georgia';
        context.fillText(Math.round(sampleSum/sampleSize) + 'fps', 10, 20);

        lastUpdated = new Date().getTime();
    };
})();