var env = process.env.NODE_ENV || 'development',
    app = require('express')(),
    serveStatic = require('serve-static');
   
if (env === 'production') {
    app.use(serveStatic('./dist'));
} else {
    app.use(serveStatic('./app'));
}

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), function() {
    console.log('Server started on port %d', app.get('port'));
});