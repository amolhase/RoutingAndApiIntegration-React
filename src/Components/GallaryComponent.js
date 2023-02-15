import { useEffect, useState } from "react";
import PhotoComponent from "./PhotoComponent";
import "../Style/GallaryComponent.css";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/GallarySlice";
import spinner from "../assets/images/spinner.gif"

const perPage = 50;

const GallaryComponent = () => {
  const data = useSelector((state) => state.imageData);
  const dispatch = useDispatch();
  const { photosData, loading, error } = data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + perPage;
  const currentItems = photosData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(photosData.length / perPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % photosData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="header">
        <p className="heading-text">Gallary of Images</p>
      </div>
      <div className="container">
        {loading ? (
          <div className="spinner">
            <img src={spinner} alt="alt" />
          </div>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          currentItems.map((photo, index) => {
            return <PhotoComponent key={index} photo={photo} />;
          })
        )}
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
