(function(namespace) {
    var BaseScreen = function(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    };
    BaseScreen.prototype.keyState = {};
    BaseScreen.prototype.render = function() {};
    BaseScreen.prototype.update = function(/* delta */) {};
    BaseScreen.prototype.keyUp = function(code) {this.keyState[code] = false;};
    BaseScreen.prototype.keyDown = function(code) {this.keyState[code] = true;};
    BaseScreen.prototype.keyPress = function(/* code */) {};
    BaseScreen.prototype.dispose = function() {};
    
    namespace.Screens = {
        BaseScreen: BaseScreen
    };
    
})(this);