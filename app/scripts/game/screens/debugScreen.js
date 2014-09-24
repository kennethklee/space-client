(function(namespace) {
    /*
    var KEY_UP = 38,
        KEY_DOWN = 40,
        KEY_LEFT = 37,
        KEY_RIGHT = 39,
        KEY_A = 64,
        KEY_S = 83,
        KEY_D = 68,
        KEY_W = 87;
    */
    var DebugScreen = namespace.Screens.DebugScreen = function(canvas, context) {
        namespace.Screens.BaseScreen.call(this, canvas, context);
    };
    _.extend(DebugScreen.prototype, namespace.Screens.BaseScreen.prototype, {
        render: function() {
            var width = this.canvas.width,
                height = this.canvas.height;
            
            this.context.clearRect(0, 0, width, height);
            this.context.fillStyle = 'blue';
            this.context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
            this.context.fillStyle = 'red';
            this.context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
            this.context.fillStyle = 'green';
            this.context.fillRect(Math.random() * width, Math.random() * height, 10, 10);

            renderFps(this.context);
            
            this.context.font = '12px Georgia';
            this.context.fillText(JSON.stringify(this.keyState), 10, 360);
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
})(this);