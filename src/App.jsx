import {  useEffect, useState } from 'react'
import ImageGallery from './components /ImageGallery/ImageGallery';
import Loader from './components /Loader/Loader';
import ErrorMessage from './components /ErrorMessage/ErrorMassage'
import SearchBar from './components /SearchBar/SearchBar';
import './App.css'
import { getImagesApi } from './components /api/images-api';
import LoadMoreBtn from './components /LoadMoreBtn/LoadMoreBtn';
import ModalForm from './components /Modal/ModalForm';
import Modal from 'react-modal';
Modal.setAppElement('#root');

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState (null)
  const [modalIsOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        setError(false)
        setIsLoading(true)
        const data = await getImagesApi(query, page);
        setImages((prev) => [...prev, ...data]);
        
      } catch (error) {
       
        setError(true)
        
      }
      finally {
        setIsLoading(false)
      }
      
    }
  
    if (query) fetchImages();
  
  }, [page, query])
  
  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery)
    setImages([])
    setPage(1)
  }

  const handleLoadMore = async () => {
    setPage(page + 1)
  }

  // Modal
 

  const openModal = (image) => {
    setSelectedImage (image)
    setIsOpen(true);
  }

 const  afterOpenModal =() => {
    
  }

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null)
  }
    return (
      <>
        <SearchBar submit={handleSubmit} />
        {isLoading && <Loader />
        }
        {error && <ErrorMessage />}
        {images.length > 0 && (<ImageGallery images={images}  onImageClick = {openModal}/>)}
        {images.length > 0 && (<LoadMoreBtn handleLoadMore={ handleLoadMore} />)}
        { selectedImage && (
        <ModalForm 
        image = {selectedImage}
        modalIsOpen = {modalIsOpen} 
        openModal={openModal} 
        afterOpenModal= {afterOpenModal} 
        closeModal ={closeModal}/>)}
       
      
      </>
    );
  }

export default App
