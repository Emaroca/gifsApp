import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['smile']);

    return ( 
    <div>
        <h2 className="text-shadow">Gif Expert App</h2>
        <p>Ingrese una categoria para buscar Gifs</p>
        <AddCategory setCategories={ setCategories }/>
        <hr />
            { categories.map( cat => 
                <GifGrid category={cat} key={cat}/>
            )}
    </div> );
}
 
