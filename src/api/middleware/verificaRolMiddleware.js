exports.esAdministradorMiddleware = async function(req, res, next) {
    
    var admin = false
    var adminitrativo = false
    for (var i = 0; i < req.tokenDesencriptado.datostoken.roles.length; i++) {
        if (req.tokenDesencriptado.datostoken.roles[i].id==4) {
            admin = true;
        };
        if (req.tokenDesencriptado.datostoken.roles[i].id==2) {
            adminitrativo = true;
        };    
    };
    if(!admin && !adminitrativo ){
        return res.status(401).json({ error: 'Solo personal administrativo puede realizar esta accion' });
    }

    next();
};
