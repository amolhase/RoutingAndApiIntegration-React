import { createSlice } from "@reduxjs/toolkit";

export const fetchData = ()=> (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((photosData) => (dispatch(loading(photosData))));
}

const initialState = {
  photosData: [],
  loadingData : true
};

export const GallarySlice = createSlice({
  name: "GallaryComponent",
  initialState,
  reducers: {
    loading: (state,action) => {
      return {
        photosData : action.payload,
        loadingData : false
      }
    },
  },
});

export const { loading, loaded } = GallarySlice.actions;

export default GallarySlice.reducer;
