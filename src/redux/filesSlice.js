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
      toast("✅  New File Uploaded !");
    },
    starFile(state, action) {
      state.map((file) => {
        file.id === action.payload ? (file.isStarred = !file.isStarred) : "";
        file.id === action.payload
          ? (file.dateStarred = new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }))
          : "";
        return file;
      });
    },
    archiveFile(state, action) {
      state.map((file) => {
        file.id === action.payload ? (file.isArchived = !file.isArchived) : "";
        file.id === action.payload
          ? (file.dateArchived = new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }))
          : "";
      });
    },
  },
});

export const { createFile, starFile, archiveFile } = filesSlice.actions;
export default filesSlice.reducer;
