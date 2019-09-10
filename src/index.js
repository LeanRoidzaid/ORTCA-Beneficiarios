const app = require ('./config/server');

require('./app/routes/usuarios')(app);

//start server
app.listen(app.get('port'), function() {
    console.log('server iniciado en puerto', app.get('port'));
});