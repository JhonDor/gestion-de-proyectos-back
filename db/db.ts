import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://admin:AdminProyectos@adminproyects-tech5.zjqwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;