import { useEffect, useState } from "react";
import PhotoComponent from "./PhotoComponent";
import "../Style/GallaryComponent.css";
import ReactPaginate from 'react-paginate';

const perPage = 50;

const GallaryComponent = () => {
  const [photosData, setPhotosData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotosData(data));
  }, []);

const [itemOffset, setItemOffset] = useState(0);
const endOffset = itemOffset + perPage;
const currentItems = photosData.slice(itemOffset, endOffset);
const pageCount = Math.ceil(photosData.length / perPage);

const handlePageClick = (event) => {
  const newOffset = (event.selected * perPage) % photosData.length;
  setItemOffset(newOffset);
};

  return (
    <div>
      <div className="container">
        {currentItems.map((photo, index) => {
          return <PhotoComponent key={index} photo={photo} />;
        })}
      </div>
      <div>
      <ReactPaginate
       previousLabel={"← previous"}
       nextLabel="next →"pageCount={pageCount}
       onPageChange={handlePageClick}
       containerClassName={"pagination"}
       previousLinkClassName={"pagination_link"}
       nextLinkClassName={"pagination_link"}
       disabledClassName={"pagination_link--disabled"}
       activeClassName={"pagination_link--active"} />
      </div>
    </div>
  );
};

export default GallaryComponent;
