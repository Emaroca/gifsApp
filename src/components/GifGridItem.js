import '../index.css'

export const GifGridItem = ( { image, title } ) => {
    return (
        <div className='card'>
            <img src={ image } alt={title} />
            <h4> {title}</h4>
        </div>
    )
}