import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect('mongodb+srv://admin:admin@gestionproyecto.epcd8.mongodb.net/GestionProyectos?retryWrites=true&w=majority')
        .then(() => {
            console.log('Conexión exitosa a la BD');
        })
        .catch(err => {
            console.error('Error al conectar a la BD', err);
    })
};

export default conectarBD;