(function() {
    var BaseScreen = function() {};
    BaseScreen.prototype.render = function() {};
    BaseScreen.prototype.update = function() {};
    BaseScreen.prototype.keyUp = function(code) {};
    BaseScreen.prototype.keyDown = function(code) {};
    
    window.Screens = {
        BaseScreen: BaseScreen
    };
})();