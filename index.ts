import conectarBD from "./db/db";
import { UserModel } from "./models/user";
import { Enum_Rol } from "./models/enums";

const main = async () => {
    await conectarBD();

    await UserModel.create({
        apellido: "dorado",
        nombre: "Jhon",
        correo: "algo",
        identificacion: "1234",
        rol: Enum_Rol.administrador
    })
    .then((u) => {
        console.log('usuario creado' , u);
    })
    .catch((e) => {
        console.error('no se pudo crear el usuario' , e);
    });
    /*
    await UserModel.find()
    .then((u) =>{
        console.log('usuarios' , u);

    })
    .catch((e) => {
        console.error('erros consultando usuario' , e);
    });*/
};
main ();