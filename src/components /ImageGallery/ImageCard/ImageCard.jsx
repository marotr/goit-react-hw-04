import css from './ImageCard.module.css'

const ImageCard = ({ image }) => {
  const {
    alt_description,
    likes,
    id,
    user: { bio, name, instagram_username, location }
  } = image;
  
  return (
    <div className={css.card}>
      <img src={image.urls.small} alt={alt_description} key={id} className={css.image} />
      <ul className={css.cardDetails}>
        <li className={css.cardElement}>
          <span className={css.label}>Likes: </span>
          <p className={css.value}>{likes}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Author: </span>
          <p className={css.value}>{name}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Location: </span>
          <p className={css.value}>{location}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>About Author: </span>
          <p className={css.value}>{bio}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Instagram: </span>
          <p className={css.value}>
            {instagram_username ? `@${instagram_username}` : 'N/A'}
          </p>
        </li>
      </ul> </div>
  )
}

export default ImageCard