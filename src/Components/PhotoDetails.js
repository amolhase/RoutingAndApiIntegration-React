import { Link, useParams } from "react-router-dom";
import "../Style/PhotoDetails.css";
import { useSelector } from "react-redux";

const PhotoDetails = (props) => {
  let data = [];
  const { id } = useParams();

  const photo = useSelector(state => state.imageData.data);

  photo.filter(image => {
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
