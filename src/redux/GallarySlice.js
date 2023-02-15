import { createSlice } from "@reduxjs/toolkit";

export const fetchData = () => (dispatch) => {
  dispatch(fetchPhotoRequest());
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((photosData) => dispatch(fetchPhotoSuccess(photosData)))
    .catch((error) => {
      dispatch(fetchPhotoError(error.message));
    });
};

const initialState = {
  photosData: [],
  loading: false,
  error: "",
};

export const GallarySlice = createSlice({
  name: "GallaryComponent",
  initialState,
  reducers: {
    fetchPhotoRequest: (state) => {
      return {
        loading: true,
        photosData: [],
      };
    },
    fetchPhotoSuccess: (state, action) => {
      return {
        loading: false,
        photosData: action.payload,
      };
    },
    fetchPhotoError: (state, action) => {
      return {
        loading: false,
        photosData: [],
        error: action.payload,
      };
    },
  },
});

export const { fetchPhotoRequest, fetchPhotoSuccess, fetchPhotoError } =
  GallarySlice.actions;

export default GallarySlice.reducer;
