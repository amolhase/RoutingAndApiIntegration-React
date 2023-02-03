import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../Style/PhotoDetails.css';

const PhotoDetails = (props) => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2 className="heading">PhotoDetails</h2>
      <div className="details">
        <div className="image-details">
          <img src={data.url} alt="alt" />
        </div>
        <div className="title-details">
            {data.title}
        </div>
        <Link to="/">Home</Link>
      </div>
      
    </div>
  );
};

export default PhotoDetails;
