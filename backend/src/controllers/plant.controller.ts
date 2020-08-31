import {Request, Response} from "express";

import {Plant} from "../../utils/interfaces/Plant";

const {validationResult} = require('express-validator');

export async function getPlantsController(request: Request, response: Response) {

    try {

        const plant: Plant | string = request.session?.profile ?? "No user signed in";

        const data = await selectAllTweets()
        // return the response
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        console.log(error);
    }
}