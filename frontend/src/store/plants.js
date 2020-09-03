import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config";

const slice = createSlice({
  name: "plants",
  initialState: [],
  reducers: {
    getAllPlants: (plants, action) => {
      return action.payload
    }
  }
})

export const {getAllPlants} = slice.actions

export const fetchAllPlants = () => async (dispatch) => {
  const {data} =  await httpConfig.get("/apis/plant/");
  dispatch(getAllPlants(data));
};

export default slice.reducer