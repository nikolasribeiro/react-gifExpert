import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    //estado local de este componente
    const [inputValue, setInputValue] = useState('');

    // handleChange
    const handleChange = e => {
        setInputValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validamos si input viene vacio
        if( inputValue.trim() === '' ){
            alert('El input no puede estar vacio');
            return;
        }

        // añadimos una nueva categoria
        setCategories(cat => [inputValue, ...cat]);

        // Limpiamos el input
        setInputValue('');
    }

    return (
        
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleChange }
            />
        </form>
    )
}

// Hacemos que setCategories sea un prop requerido
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}