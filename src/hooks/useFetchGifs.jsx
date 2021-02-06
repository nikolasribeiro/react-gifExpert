import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';
import PropTypes from 'prop-types';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs( category )
            .then(imgs => {
                setState({
                    data:imgs,
                    loading:false
                });
            });
    }, [ category ]);

    

    return state; // el state es: { data:[], loading:true };

}

// La categoria en este custom hook es realmente requerida ya que sin ella,
// no puede realizar la consulta a la API. Resumen: el customHook no funciona
useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}