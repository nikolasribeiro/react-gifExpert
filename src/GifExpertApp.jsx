import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ()=>{

    //const categories = ["One Punch", "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(["One Punch"]);
	
    //const handleAdd = () => {
    //    setCategories([
    //        ...categories,
    //        "new_element"
    //    ]);
    //}


    return (
		<>
			<h2>GifExpertApp</h2>
            {/* el setCategories se pasa como prop al componente AddCategory */}
            <AddCategory setCategories={ setCategories }/>
			<hr />
            <ol>
                {
                    categories.map(category =>( 
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
		</>
	);

}

export default GifExpertApp;
