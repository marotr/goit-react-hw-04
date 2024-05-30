import css from './ImageGallery.module.css'
import ImageCard from './ImageCard/ImageCard'

const ImageGallery = ({ images }) => {
  return (
    <div className={css.gallery}>
      
        <ul>
          {images.map(image => ( 
            <li key={image.id}>
              <ImageCard image={image} />

            </li>
          ))}
      </ul> 
    </div>
  )
}

export default ImageGallery