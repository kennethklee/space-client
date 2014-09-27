(function(namespace) {
    var keyMap = {
        up: 38,
        down: 40,
        left: 37,
        right: 39
    };
    var GameScreen = namespace.Screens.GameScreen = function(canvas, context, username) {
        var self = this;
        namespace.Screens.BaseScreen.call(this, canvas, context);

        this.username = username;
        this.lastKeyState = {};
        this.players = {};
        this.socket = io('http://konquest-server.herokuapp.com:80');
        
        this.socket.on('connect', function() {
            // todo login
            self.socket.emit('login', self.username);
        });
        this.socket.on('system message', function(msg) {
            console.log('system message', msg);
        });
        this.socket.on('user message', function(msg) {
            console.log('user message', msg);
        });
        this.socket.on('map state', function(state) {
            console.log('map state', state);
        });
        this.socket.on('heartbeat sync', function(state) {
            console.log('heartbeat sync', state);
            self.players = state.players;
        });
        this.socket.on('delta sync', function(state) {
            // This will happen a lot
            console.log('delta sync', state);
            console.log(self.players);
            var deltaPlayers = Object.keys(state.players);
            for (var i = 0; i < deltaPlayers.length; i++) {
                self.players[deltaPlayers[i]] = state.players[deltaPlayers[i]];
            }
        });
    };
    _.extend(GameScreen.prototype, namespace.Screens.BaseScreen.prototype, {
        hasMovementChanged: function() {
            return this.lastKeyState[keyMap.up] !== this.keyState[keyMap.up]
                || this.lastKeyState[keyMap.down] !== this.keyState[keyMap.down]
                || this.lastKeyState[keyMap.left] !== this.keyState[keyMap.left]
                || this.lastKeyState[keyMap.right] !== this.keyState[keyMap.right];
        },
        update: function() {
            namespace.space.update();
            
            // Check for movement
            if (this.hasMovementChanged()) {
                var movement = {
                    up: this.keyState[keyMap.up],
                    down: this.keyState[keyMap.down],
                    left: this.keyState[keyMap.left],
                    right: this.keyState[keyMap.right]
                };
                this.socket.emit('movement change', movement);
                _.extend(this.lastKeyState, this.keyState);
            }
        },
        render: function() {
            var players = Object.keys(this.players);
            for (var i = 0; i < players.length; i++) {
                var playerName = players[i];
                this.context.fillStyle = 'red';
                this.context.fillRect(this.players[playerName].position.x/5, this.players[playerName].position.y/5, 20, 20);
            }

        }
    });
})(this);