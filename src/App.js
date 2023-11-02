import {useState} from 'react';
import SearchBar from './components/SearchBar';
import ImgaeList from './components/ImageList';
import searchImages from './api';

function App()
{

    const [images , setImages] = useState([]);

    const handleSubmit = async(term) =>{
      const result = await searchImages(term);
      setImages(result);
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImgaeList images ={images}/>
        </div>    
    )
}

export default App;