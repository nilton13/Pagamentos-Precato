import { Router } from "express";
import credorRouter from "../../../modules/credores/routes/credores.routes";
import devedoresRouter from '../../../modules/devedores/routes/devedores.routes'

const routes = Router();

routes.use('/devedores', devedoresRouter);
routes.use('/credores', credorRouter);

routes.get('/', (request,response) =>{
    return response.json({ message: "Hello Dev" })
})

export default routes;