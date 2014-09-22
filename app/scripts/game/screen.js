(function() {
    var BaseScreen = function() {
        
    };
    BaseScreen.prototype.render = function() {};
    BaseScreen.prototype.update = function() {};
    
    window.Screens = {
        BaseScreen: BaseScreen
    };
})();