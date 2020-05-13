const fs = require('fs');
const path = require('path');
var alumnos = ["Juan","Pablo","Ana","Luisa"];


const controller = {
    showProfile : function(request,response,next){
        response.render("users/profile",{
          usuario: "Diego Caplan",
          rol: "Docente",
          alumnosEnLaVista: alumnos
        });
      },
      showRegisterForm: function(req,res,next){
            res.render("users/register");
      },
      processRegisterForm: function(req,res,next){
        //req.body (formulario por post)
        //req.params (parametros de la :ruta)
        //req.query (datos por ?querystring)
        let nombre = req.body.name;
        let email = req.body.email;
        let contrasenia = req.body.password;
        let confirmarContrasenia = req.body.passwordConfirm;
        //guardar foto
        let avatar = "foto.png";

        let usuario = {
            name : nombre,
            email : email,
            password : contrasenia,
            foto : avatar
        }

        let usuariosJSON = fs.readFileSync("./data/users.json");
        let usuariosJS = JSON.parse(usuariosJSON);
        usuariosJS.push(usuario);
        usuariosJSON = JSON.stringify(usuariosJS);
        fs.writeFileSync("./data/users.json",usuariosJSON);

        res.send("usuario registrado exitosamente");
      }
}

module.exports = controller;