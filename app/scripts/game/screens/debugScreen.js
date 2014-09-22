(function() {
    var DebugScreen = window.Screens.DebugScreen = function() {
        
    };
    DebugScreen.prototype.render = function(context, width, height) {
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'blue';
        context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
        context.fillStyle = 'red';
        context.fillRect(Math.random() * width, Math.random() * height, 10, 10);
        context.fillStyle = 'green';
        context.fillRect(Math.random() * width, Math.random() * height, 10, 10);

        renderFps(context);
    };
    DebugScreen.prototype.update = function() {};
})();