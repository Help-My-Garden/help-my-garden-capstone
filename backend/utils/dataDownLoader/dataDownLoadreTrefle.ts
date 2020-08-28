import axios from "axios"
import {Plant} from "../interfaces/Plant";
require('dotenv').config()


function dataDownloader() : Promise<any> {
    return downloadPlants()

    async function downloadPlants() {
        try {
            const {data} = await axios.get(`https://trefle.io/api/v1/distributions/nwm/plants/?token=${process.env.API_KEY}`)

            const dataArray = data.data

                for(let currentPlant of dataArray) {
                    const plantData = await axios.get(`https://trefle.io/api/v1/distributions/nwm/plants/${currentPlant.id}/?token=${process.env.API_KEY}`)

                    const mainSpecies = plantData.data.data.main_species
                    const plantDuration = mainSpecies.duration !== null ? mainSpecies.duration[0] : null

                    let plant : Plant = {plantId: null, plantColor: mainSpecies.flower.color?.join(", ") ?? null, plantCommonName: currentPlant.common_name, plantDuration, plantFamilyName: currentPlant.family_common_name, plantImageUrl: currentPlant.image_url, plantScientificName: currentPlant.scientific_name, plantSize: `${mainSpecies.specifications.average_height.cm} cm`, plantSunlight: `${mainSpecies.growth.light} hours`}

                    /*console.log(plant)*/

                }
                return dataArray

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))