(function(namespace) {
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
    
    namespace.renderFps = renderFps;
})(this);