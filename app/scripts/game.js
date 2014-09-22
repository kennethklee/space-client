(function() {
    // Initialize
    var screenCanvas = document.getElementById('canvas-1');
    var bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = screenCanvas.width;
    bufferCanvas.height = screenCanvas.height;

    var screenCtx = screenCanvas.getContext('2d');
    var bufferCtx = bufferCanvas.getContext('2d');
    
    var currentScreen = new Screens.DebugScreen();

    var update = function() {
        space.update();

        currentScreen.render(bufferCtx, bufferCanvas.width, bufferCanvas.height);
        
        // render screen
        screenCtx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
        screenCtx.drawImage(bufferCanvas, 0, 0);

        requestAnimationFrame(update);
    };
    
    // start!
    update();    
})();
