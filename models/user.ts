import { Schema, model } from 'mongoose';
import { Enum_Rol } from './enums';


interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
}

const userschema = new Schema<User>({
    correo:{
        type: String,
        required:true,
    },
    identificacion:{
        type: String,
        requiered: true,
        unique: true,
    },
    nombre:{
        type: String,
        requiered: true,
    },
    apellido:{
        type: String,
        requiered: true,
    },
    rol: {
        type: String,
        requiered: true,
        enum: Enum_Rol
    },

});

const UserModel = model('User', userschema);
export { UserModel };