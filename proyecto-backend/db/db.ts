import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(process.env.DATABASE_URL)
        .then(() => {
            console.log('Conexión exitosa a la BD');
        })
        .catch(err => {
            console.error('Error al conectar a la BD', err);
    })
};

export default conectarBD;