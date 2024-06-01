import {  useEffect, useState } from 'react'
import ImageGallery from './components /ImageGallery/ImageGallery';
import Loader from './components /Loader/Loader';
import ErrorMessage from './components /ErrorMessage/ErrorMassage'
import SearchBar from './components /SearchBar/SearchBar';
import './App.css'
import { getImagesApi } from './components /api/images-api';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
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
    // query && fetchImages();
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
    return (
      <>
        <SearchBar submit={handleSubmit} />
        {isLoading && <p><Loader /></p>
        }
        {error && <ErrorMessage />}
        {images.length > 0 && (<ImageGallery images={images} />)}
        {images.length > 0 && <button onClick={handleLoadMore}>load more..</button>}
       
      
      </>
    );
  }

export default App
