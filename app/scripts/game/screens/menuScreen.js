(function(namespace) {
    var MenuItem = function(context, text) {
        this.context = context;
        this.text = text;
        this.height = 32;        
    };
    MenuItem.prototype.render = function(x, y, selected) {
        this.context.fillStyle = selected ? 'white' : 'grey';
        this.context.font = '18px Georgia';
        this.context.fillText(this.text, x, y);
    };
    
    var MenuScreen = namespace.Screens.MenuScreen = function(canvas, context) {
        namespace.Screens.BaseScreen.call(this, canvas, context);
        this.menuIndex = 0;
        
        this.children = [
            new MenuItem(context, 'Start'),
            new MenuItem(context, 'Options')
        ];
        
        this.particles = [];
        for (var i = 0; i < 100; i++) {
            this.particles.push({x: Math.random() * canvas.width, y: Math.random() * canvas.height});
        }
    };
    _.extend(MenuScreen.prototype, namespace.Screens.BaseScreen.prototype, {

        render: function() {
            for(var i = 0; i < this.particles.length; i++) {
                var particle = this.particles[i];
                
                this.context.fillStyle = (i % 2) ? 'white': 'grey';
                this.context.fillRect(particle.x, particle.y, 1, 1);
            }
            
            this.context.fillStyle = 'darkslategray';
            this.context.font = '272px Verdana';
            this.context.fillText('space', -50, 300);
            
            var x = (this.canvas.width / 2) + 100,
                y = 200;
            for(i = 0; i < this.children.length; i++) {
                var item = this.children[i];
                
                item.render(x, y, this.menuIndex === i);
                
                y += item.height;
            }
            

        },
        keyDown: function(code) {
            this.menuIndex += (code === 40) * 1;
            this.menuIndex -= (code === 38) * 1;
            this.menuIndex = Math.abs(this.menuIndex % this.children.length);
        }
    });
    

    
})(this);