import express, {Application, Request, Response} from 'express'
import cors from 'cors'
import router from './app/modules/routes'

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// api endpoint
app.use('/api/v1', router)
app.use('/api/v1',(req: Request, res: Response)=> res.json("Api Not Found"))
export default app;