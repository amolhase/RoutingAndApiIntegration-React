import { createSlice } from "@reduxjs/toolkit";

let photosData = [];

export const fetchData = ()=> (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => (dispatch(loading(data))));
}

const apiData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  }
]

const initialState = {
  data: photosData
};

export const GallarySlice = createSlice({
  name: "GallaryComponent",
  initialState,
  reducers: {
    loading: (state,action) => {
      state.data = action.payload;
    },
    loaded: (state) => {
      state.data = apiData
    },
  },
});

export const { loading, loaded } = GallarySlice.actions;

export default GallarySlice.reducer;
