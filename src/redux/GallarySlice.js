import { createSlice } from "@reduxjs/toolkit";

let photosData = [];

// const getData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const data = await response.json();
//   return data;
// };
// getData().then((data) => (photosData = data));

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(data => photosData = data);

const initialState = {
  photos: [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
  ],
};

export const GallarySlice = createSlice({
  name: "GallaryComponent",
  initialState,
  reducers: {
    loading: (state) => {
      state.photos = photosData;
    },
  },
});

export const { loading } = GallarySlice.actions;

export default GallarySlice.reducer;
