import { useState, useEffect } from 'react'
import ButtonBar from "./Components/ButtonBar";
import Gallery from "./Components/Gallery"


function App() {
  //state variables here
  let [objectId, setObjectId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
  document.title = 'Welcome to Artworld'
  const fetchData = async () => {
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    const data = await response.json()
    setData(data)
}
     fetchData()
  }, [objectId])



const handleIterate = (e) => {
  setObjectId(objectId + Number(e.target.value))
}

const displayImage = () => {
  if (!data.primaryImage) {
    return (
      <h2>No Image!</h2>
    )
  }
  return (
    <Gallery objectImg={data.primaryImage} title={data.title} />
  )
}
return (
  <div className="App">
    <h1>{data.title}</h1>
    <div style={{ 'width': '100%' }}>
      {displayImage()}
    </div>
    <ButtonBar handleIterate={handleIterate}/>
  </div>
)
}

export default App