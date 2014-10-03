/*
 * Web server for production
 */
var env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 4000,
    app = require('express')(),
    serveStatic = require('serve-static'),
    compress = require('compression');

app.use(compress());
app.use(serveStatic('dist'));

app.listen(port, function() {
    console.log('Web server started on port %d', port);
});
