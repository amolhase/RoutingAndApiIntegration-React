import { createSlice } from "@reduxjs/toolkit";

export const fetchData = () => (dispatch) => {
  dispatch(FETCH_PHOTO_REQUEST());
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((photosData) => dispatch(FETCH_PHOTO_SUCCESS(photosData)))
    .catch((error) => {
      dispatch(FETCH_PHOTO_ERROR(error.message));
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
    FETCH_PHOTO_REQUEST: (state) => {
      return {
        loading: true,
        photosData: [],
      };
    },
    FETCH_PHOTO_SUCCESS: (state, action) => {
      return {
        loading: false,
        photosData: action.payload,
      };
    },
    FETCH_PHOTO_ERROR: (state, action) => {
      return {
        loading: false,
        photosData: [],
        error: action.payload,
      };
    },
  },
});

export const { FETCH_PHOTO_REQUEST, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_ERROR } =
  GallarySlice.actions;

export default GallarySlice.reducer;
