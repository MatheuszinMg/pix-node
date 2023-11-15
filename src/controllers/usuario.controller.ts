import { Controller, Get } from "@nestjs/common";
import { Usuario } from "src/entidades/usuario.entidades";

@Controller({
    path:"Usuarios"
})
export class UsuarioController{

    @Get("listarUsuario")
    public listarUsuario(): Usuario[] {

        var Usuarios: Usuario[] = [];

        return Usuarios

    } 
}