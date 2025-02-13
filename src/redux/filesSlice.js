import toast from "react-hot-toast";
import fake_files from "../Data/files";
import { createSlice } from "@reduxjs/toolkit";

const initialState = fake_files;

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    createFile(state, action) {
      state.unshift(action.payload);
      toast("✅  New File Uploaded !")
    },
    starFile(state, action) {
      state.map((file) =>
        file.id === action.payload ? (file.isStarred = !file.isStarred) : ""
      );
    },
    archiveFile(state, action) {
      state.map((file) =>
        file.id === action.payload ? (file.isArchived = !file.isArchived) : ""
      );
    },
  },
});

export const { createFile, starFile, archiveFile } = filesSlice.actions;
export default filesSlice.reducer;
