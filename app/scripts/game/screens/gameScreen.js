(function(namespace) {
    var GameScreen = namespace.Screens.GameScreen = function(canvas, context) {
        namespace.Screens.BaseScreen.call(this, canvas, context);
    };
    _.extend(GameScreen.prototype, namespace.Screens.BaseScreen.prototype, {
        render: function() {
            
        }
    });
})(this);