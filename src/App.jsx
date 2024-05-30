import {  useEffect, useState } from 'react'
import ImageGallery from './components /ImageGallery/ImageGallery';
import Loader from './components /Loader/Loader';
// import SearchBar from './components /SearchBar/SearchBar'
import './App.css'
import axios from 'axios'

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState (false)
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading (true)
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=otANXC1EJFsVllXe4H6I4all7gWw62R5SlyCizaq6X4");
      setImages(response.data)
      setIsLoading (false)
      
    }
    fetchImages();
  
}, [])
  
  //  const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   const form = evt.target;
  //    const topic = form.elements.topic.value.trim();
  //   if(topic === "") {
	// 		alert("Please enter search term!")
	// 		return;
	// 	}
  //   fetchImages(topic);
  //   form.reset();
  // };

   return (
     <>
       {/* <SearchBar onSubmit={handleSubmit} /> */}
       {isLoading &&<Loader/>}
       {images.length > 0 && (<ImageGallery images={images} />)}
       
      
    </>
  );
}

export default App
