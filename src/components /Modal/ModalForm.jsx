import Modal from "react-modal";
import ImageCard from "../ImageGallery/ImageCard/ImageCard";
import css from './ModalForm.module.css'
import { AiOutlineClose } from "react-icons/ai";


const ModalForm = ({image, openModal, modalIsOpen, afterOpenModal, closeModal}) => 
     {
        console.log('ModalForm image:', image);
        const {
            alt_description,
            likes,
            id,
            user: {  name, instagram_username, location },
            urls
          } = image;    
  return (
    <div > 
    <ImageCard onClick={openModal}>Open Modal</ImageCard>
    <Modal overlayClassName={css.overlay} className={css.modalContent}

      
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      
      <button className={css.closeBtn} onClick={closeModal}><AiOutlineClose/></button>
      <div> <img src={urls.full} alt={alt_description} key={id} style={{ width: '100%' } } />
      <ul className={css.cardDetails}>
       
        <li className={css.cardElement}>
          <span className={css.label}>Author: </span>
          <p className={css.value}>{name}</p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Location: </span>
          <p className={css.value}>{location}</p>
        </li>
       
        <li className={css.cardElement}>
          <span className={css.label}>Instagram: </span>
          <p className={css.value}>
            {instagram_username ? `@${instagram_username}` : 'N/A'}
          </p>
        </li>
        <li className={css.cardElement}>
          <span className={css.label}>Likes: </span>
          <p className={css.value}>{likes}</p>
        </li>
      </ul> 
     </div>
      
    </Modal>
  </div>
  )
}

export default ModalForm