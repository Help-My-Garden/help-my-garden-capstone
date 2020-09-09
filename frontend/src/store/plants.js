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
    },
    getTenRandomPlants : (plants, action) => {
      return action.payload
    },
    getPlantsByProfileId : (plants, action) => {
      return action.payload
    },
    removePlantByPlantId : (plants, action) => {
      console.log(action.payload)
     return plants.filter(plant => {

       return plant.plantId !== action.payload.plantId})

    },
    getPlantsByPlantCommonName : (plants, action) => {
      return action.payload
    }
  }
})

export const {getAllPlants, getPlantByPlantId, getTenRandomPlants, getPlantsByProfileId, removePlantByPlantId, getPlantsByPlantCommonName} = slice.actions

export const fetchAllPlants = () => async (dispatch) => {
  const {data} =  await httpConfig.get("/apis/plants/");
  dispatch(getAllPlants(data));
};

export const fetchTenRandomPlants = () => async (dispatch) => {
  const {data} =  await httpConfig.get("/apis/plants/ten-plants/random");
  dispatch(getTenRandomPlants(data));
};

export const fetchPlantByPlantId = (id) => async (dispatch) => {
  const {data} =  await httpConfig.get(`/apis/plants/${id}`);
  dispatch(getPlantByPlantId(data));
};

export const fetchPlantByProfileId= () => async (dispatch) => {
  const {data} =  await httpConfig.get(`/apis/plants/plant-profile`);
  dispatch(getPlantsByProfileId(data));
};

export const fetchPlantsByCommonName = (name) => async (dispatch) => {
  const{data} = await httpConfig.get(`/apis/plants/plant-common-name/${name}`);
  dispatch(getPlantsByPlantCommonName(data));
}
export default slice.reducer
