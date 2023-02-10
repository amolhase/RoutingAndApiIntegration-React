import { useEffect, useState } from "react";
import PhotoComponent from "./PhotoComponent";
import "../Style/GallaryComponent.css";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../redux/GallarySlice";

const perPage = 50;

const GallaryComponent = () => {
  //const [photosData, setPhotosData] = useState([]);
  const photosData = useSelector((state) => state.imageData.photos);
  console.log("data", photosData);
  console.log("length", photosData.length);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("before dispatch photosData", photosData);
  //   dispatch(loading());
  //   console.log("after dispatch photosData", photosData);
  // }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => res.json())
  //     .then((data) => setPhotosData(data));
  // }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + perPage;
  const currentItems = photosData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(photosData.length / perPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % photosData.length;
    setItemOffset(newOffset);
  };

  const handlePerpage = () => {
    dispatch(loading());
  };

  return (
      <>
        <div className="header">
          <p className="heading-text">Gallary of Images</p>
        </div>
        <div className="container">
          {currentItems.map((photo, index) => {
            return <PhotoComponent key={index} photo={photo} />;
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="gallary-btn" onClick={handlePerpage}>
            View Gallary
          </button>
        </div>
        <div className="page-container">
          <ReactPaginate
            previousLabel={"← previous"}
            nextLabel="next →"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination_link"}
            nextLinkClassName={"pagination_link"}
            disabledClassName={"pagination_link--disabled"}
            activeClassName={"pagination_link--active"}
          />
        </div>
      </>
  );
};

export default GallaryComponent;
