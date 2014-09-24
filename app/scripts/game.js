(function(namespace) {    
    // Initialize Canvas
    var screenCanvas = document.getElementById('canvas-1');
    var bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = screenCanvas.width;
    bufferCanvas.height = screenCanvas.height;

    var screenCtx = screenCanvas.getContext('2d');
    var bufferCtx = bufferCanvas.getContext('2d');
    
    // Initialize Game Screen
    var updatedAt = new Date().getTime();
    //var currentScreen = new namespace.Screens.DebugScreen(bufferCanvas, bufferCtx);
    var currentScreen = new namespace.Screens.MenuScreen(bufferCanvas, bufferCtx);
    
    // Game loop
    var update = function() {
        var currentTime = new Date().getTime(),
            delta = currentTime - updatedAt;

        namespace.space.update();

        currentScreen.update(delta);
        currentScreen.render();
        
        // render screen
        screenCtx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        screenCtx.drawImage(bufferCanvas, 0, 0);
        bufferCtx.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);

        updatedAt = currentTime;
        requestAnimationFrame(update);
    };
    
    // Handle events
    var onKeyUp = function(event) {
        //event.preventDefault();
        currentScreen.keyUp(event.keyCode);
    };
    var onKeyDown = function(event) {
        //event.preventDefault();
        currentScreen.keyDown(event.keyCode);
    };
    var onKeyPress = function(event) {
        event.preventDefault();
        currentScreen.keyPress(event.keyCode);
    };
    namespace.addEventListener('keyup', onKeyUp, true);
    namespace.addEventListener('keydown', onKeyDown, true);
    namespace.addEventListener('keypress', onKeyPress);
    
    // start!
    update();    
})(this);
