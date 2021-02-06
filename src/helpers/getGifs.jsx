import PropTypes from 'prop-types';

export const getGifs = async ( category ) => {
    const API_KEY   = '0LQx5cOC6jCgJ7glKLq6eogRc8KKIGZg'
    const URL       = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${API_KEY}`
    const resp      = await fetch(URL);
    const { data }      = await resp.json();

    const gifs = data.map(img => {
        return {
            id      : img.id,
            title   : img.title,
            url     : img.images.downsized_medium.url
        }
    });

    //console.log(gifs);
    return gifs;
}

getGifs.propTypes = {
    category: PropTypes.string.isRequired
}