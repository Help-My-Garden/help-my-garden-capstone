import axios from "axios"
import {Plant} from "../interfaces/Plant";
import {insertPlant} from "../plant/insertPlant";
require('dotenv').config()


function dataDownloader() : Promise<any> {
    return downloadPlants()
    /*async function main() {
        try {
            await downloadPlants()

        } catch (e) {
            console.log(e)
        }
    }*/

    async function downloadPlants() {
        try {
            const {data} = await axios.get(`https://trefle.io/api/v1/distributions/nwm/plants/?token=${process.env.API_KEY}`)

            const dataArray = data.data

                for(let currentPlant of dataArray) {
                    const plantData = await axios.get(`https://trefle.io/api/v1/distributions/nwm/plants/${currentPlant.id}/?token=${process.env.API_KEY}`)
                    const mainSpecies = plantData.data.data.main_species
                    console.log(mainSpecies.specifications.maximum_height)

                    let plant : Plant = {plantId: null, plantColor: mainSpecies.flower.color?.join(", ") ?? null, plantCommonName: currentPlant.common_name, plantDuration: mainSpecies.duration , plantFamilyName: currentPlant.family_common_name, plantImageUrl: currentPlant.image_url, plantScientificName: currentPlant.scientific_name, plantSize: mainSpecies.specifications.maximum_height , plantSunlight: mainSpecies.growth.light}

                }

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))