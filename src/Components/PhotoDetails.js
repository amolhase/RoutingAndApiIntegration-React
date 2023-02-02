import { Link , useLocation , useParams } from "react-router-dom";
import { useEffect } from "react";

const PhotoDetails = (props) => {
    const {id} = useParams();

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => console.log("data",data))
    },[])


   
    return (
        <div>
            <h2>PhotoDetails {id}</h2>
            <Link to="/">Home</Link>
        </div>
    )
}

export default PhotoDetails;