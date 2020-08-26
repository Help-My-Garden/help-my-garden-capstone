import axios from "axios"
require('dotenv').config()


function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadPlants()

        } catch (e) {
            console.log(e)
        }
    }

    async function downloadPlants() {
        try {
            const {data} = await axios.get(`https://trefle.io/api/v1/distributions/nwm/plants/?token=${process.env.API_KEY}`)

            const createPlants = (array: any[]) : Plant[] => {
                // Change this part.  Instead of putting the posts into an arrray insert them into the database.
                // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
                for(let currentPlant of array) {
                    let plants : Plant = {plantId: null, postUserId: currentPost.userId, postContent: currentPost.body, postTitle: currentPost.title}
                    console.log(plants)
                }
                return posts
            }

            console.table(data.data)

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))