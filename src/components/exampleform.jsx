import React, { useState, useEffect } from 'react';
import Footer from "../components/Footer";

const Formulario = () => {
    const [cars, setCars] = useState([]); // Estado para almacenar los datos obtenidos de la API
    const [optionSelect, setOptionSelect] = useState('');

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const response = await fetch(''); // Reemplaza 'API_URL' con la URL de tu API
                const jsonData = await response.json();
                setCars(jsonData);
                console.log(jsonData);
            } catch (error) {
                console.log('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="contact-page">
            <br />
            <div className="container">
                <div className="cookies">
                    <form>
                        <select value={optionSelect} onChange={e => setOptionSelect(e.target.value)}>
                            {cars.map(car => (
                                <option key={car.id} value={car.value}>{car.description}</option>
                            ))}
                        </select>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Formulario;