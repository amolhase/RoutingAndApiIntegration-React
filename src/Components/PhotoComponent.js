import { Link } from "react-router-dom";
import "../Style/PhotoComponent.css";

const PhotoComponent = (props) => {
  const photo = props.photo;
  return (
    // <Link to='/photoDetails'>
    //     <Link to={{pathname: '/photoDetails',
    //     state: { photo }
    //   }}
    // >
    //<Link to={{ pathname: '/photoDetails/:id', state: { photo } }}>
    <Link to={`/photoDetails/${photo.id}`}>
      <div className="card">
        <div className="thumbnail">
          <img src={photo.thumbnailUrl} alt="alt" />
        </div>
        <div className="title">{photo.title}</div>
      </div>
    </Link>
  );
};

export default PhotoComponent;
