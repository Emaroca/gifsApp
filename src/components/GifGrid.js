import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs'
import '../index.css'

export const GifGrid = ( { category } ) => {

    const {data: images, loading} = useFetchGifs( category )
  
    return (
        <>
        <h2 className="animate__animated animate__bounce text-shadow">{ category }</h2>
        { loading && 'Cargando...'}
        
        <div className="card-grid animate__animated animate__lightSpeedInRight ">
            {images.map( img => (
                <GifGridItem 
                    {...img}
                    key={img.id} 
                    />
                )
                )}
        </div>
    </>
    )
}