import { Router } from "express";
import devedoresRouter from '../../../modules/devedores/routes/devedores.routes'

const routes = Router();

routes.use('/devedores', devedoresRouter);

routes.get('/', (request,response) =>{
    return response.json({ message: "Hello Dev" })
})

export default routes;