import { Link, useParams } from "react-router-dom";
import "../Style/PhotoDetails.css";
import { useSelector } from "react-redux";

const PhotoDetails = (props) => {
  let data = [];
  const { id } = useParams();

  const images = useSelector(state => state.imageData);
  const {photosData} = images;

  photosData.filter(image => {
    if(image.id == id){
      data = image;
    }
  });

  return (
    <div>
      <div className="details">
        <div className="image-details">
          <img src={data.url} alt="alt" />
        </div>
        <div className="title-details">{data.title}</div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default PhotoDetails;
