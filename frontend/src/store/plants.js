import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config";

const slice = createSlice({
  name: "plants",
  initialState: [],
  reducers: {
    getAllPlants: (plants, action) => {
      return action.payload
    },
    getPlantByPlantId : (plants, action) => {
      plants.push(action.payload)
    }
  }
})

export const {getAllPlants, getPlantByPlantId} = slice.actions

export const fetchAllPlants = () => async (dispatch) => {
  const {data} =  await httpConfig.get("/apis/plants/");
  dispatch(getAllPlants(data));
};

export const fetchPlantByPlantId = (id) => async (dispatch) => {
  const {data} =  await httpConfig.get(`/apis/plants/${id}`);
  dispatch(getPlantByPlantId(data));
};
export default slice.reducer