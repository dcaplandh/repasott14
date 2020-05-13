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
        console.log(req.body);
        res.redirect("/users")
      }
}

module.exports = controller;