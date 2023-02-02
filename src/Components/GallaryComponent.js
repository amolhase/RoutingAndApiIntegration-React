import { useEffect, useState } from "react";
import PhotoComponent from "./PhotoComponent";
import '../Style/GallaryComponent.css'

const GallaryComponent = () => {
    const [photosData,setPhotosData] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setPhotosData(data))
    },[])

    return (
        <div className="container">
            {photosData.map((photo,index) => {
                return (
                     <PhotoComponent key={index} photo={photo}/>
                )
            })}
        </div>
    )
}

export default GallaryComponent;