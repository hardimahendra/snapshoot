import { useState, useEffect } from 'react';
import { LoadImages, SearchImages } from './components/api'
import Image from './components/image'

function App() {
  const [query, setQuery] = useState()
  const [searchIt, setSearch] = useState()
  const data = LoadImages();
  const search = () => {
    setSearch(query)
  }
  const searchData = SearchImages(searchIt)
  console.log(searchData)
  return (
    <>
      <div className='wrapper'>
        <h1>Fetch API Images From Unsplash.com</h1>
        <div className='input-field'>
          <input type="text" onChange={(e) => setQuery(e.target.value)}/>
          <button className='btn-search' onClick={search}>Search</button>
        </div>
        <div className="images-wrapper">
        {searchIt ? searchData.map((img, key) => (
          <>
          <Image  key={key}  src={img.urls.small}/>
          </>
          )) : data.map((img, key) => (
            <>
            <Image  key={key}  src={img.urls.small}/>
            </>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
