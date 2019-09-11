const dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    const connect = dbConnection();

    
    app.get('/', function(req, res){
        //res.send("hola mundo")

        connect.query('SELECT * FROM users', function(err, result){
            //console.log(result);
            res.render('beneficiarios/beneficiarios',{
                users: result
            });
        });    
    });

    app.post('/beneficiarios', function(req, res){
        console.dir(req.body)
        const beneficiarios = req.body;
        console.log("req"+req.query.nombre);
        connect.query('INSERT INTO users SET?', {
            nombre: beneficiarios.nombre,
            apellido: beneficiarios.apellido,
            telefona: beneficiarios.telefono
        }, function(err,result){
            res.redirect('/'); 
        });

    }); 

}