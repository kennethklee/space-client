var env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || 4000,
    app = require('connect')(),
    serveStatic = require('serve-static');
   
if (env === 'production') {
    app.use(serveStatic('dist'));
} else {
    app
        .use(require('connect-livereload')({ port: 35729 }))
        .use(serveStatic('app'))
        .use(serveStatic('.tmp'));
}

app.listen(port, function() {
    console.log('Web server started on port %d', port);
});