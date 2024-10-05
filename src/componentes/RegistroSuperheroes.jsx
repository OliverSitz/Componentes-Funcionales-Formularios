import React, { useState } from 'react';
import miImagen from '/chapulin_colorado.png'

const RegistroSuperheroes = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [superheroes, setSuperheroes] = useState([]);
    const [header, setHeader] = useState("Registro de Superhéroes");
    const [errors, setErrors] = useState({});

    const validarFormulario = () => {
        const newErrors = {};
        if (nombre.length < 4 && nombre.trim() !== '') {
        newErrors.nombre = "El nombre debe tener al menos 4 caracteres.";
        }
        if (apellido.length < 4 && apellido.trim() !== '') {
        newErrors.apellido = "El apellido debe tener al menos 4 caracteres.";
        }
        if (correo.length < 10 && correo.trim() !== '') {
        newErrors.correo = "El correo electrónico es muy corto.";
        }
        if (contrasena.length < 12 && contrasena.trim() !== '') {
        newErrors.contrasena = "La contraseña debe tener al menos 12 caracteres.";
        }
        if (contrasena !== confirmarContrasena && confirmarContrasena.trim() !== '') {
        newErrors.confirmarContrasena = "Las contraseñas no coinciden.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const manejarRegistro = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            const nuevoHeroe = { nombre, apellido, correo };
            setSuperheroes([...superheroes, nuevoHeroe]);
            setHeader("Superhéroe Agregado!");
            setNombre('');
            setApellido('');
            setCorreo('');
            setContrasena('');
            setConfirmarContrasena('');
        }
    };

    return (
        <div style={styles.container}>
            <h1>{header}</h1>
            <form onSubmit={manejarRegistro} style={styles.form}>
                <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                {errors.nombre && <p style={styles.error}>{errors.nombre}</p>}
                <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                />
                {errors.apellido && <p style={styles.error}>{errors.apellido}</p>}
                <input
                type="email"
                placeholder="Correo Electrónico"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                />
                {errors.correo && <p style={styles.error}>{errors.correo}</p>}
                <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                />
                {errors.contrasena && <p style={styles.error}>{errors.contrasena}</p>}
                <input
                type="password"
                placeholder="Confirmar Contraseña"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
                />
                {errors.confirmarContrasena && <p style={styles.error}>{errors.confirmarContrasena}</p>}
                <button type="submit" style={styles.button}>Crear Superhéroe</button>
            </form>
            <div style={styles.lista}>
                <h2>Superhéroes Registrados</h2>
                {superheroes.map((hero, index) => (
                <div key={index} style={styles.hero}>
                    <p>{hero.nombre} {hero.apellido} - {hero.correo}</p>
                </div>
                ))}
            </div>
            <img 
                src={miImagen} 
                alt="Chapulin Colorado" 
                style={styles.imagen} 
            />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    },
    error: {
        color: 'red',
        fontSize: '12px',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    lista: {
        marginTop: '20px',
        width: '300px',
    },
    hero: {
        backgroundColor: '#333',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '5px',
    },
    imagen: {
        marginTop: '20px',
        width: '30%',
        height: 'auto',
    },
};

export default RegistroSuperheroes;