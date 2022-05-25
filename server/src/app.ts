// بسم الله الرحمن الرحيم
import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import config from 'config'
import logger from "./utils/logger"
import {version} from '../package.json'
const port = config.get<number>("port")
const host = config.get<string>("host")
const corsOrigin= config.get<string>("corsOrigin")
const app = express()
const httpServer = createServer(app)
const io = new Server (httpServer,{
    cors:{
        origin:corsOrigin,
        credentials:true,
    },
})
app.get('/',(_,res)=>{
res.send('بسم الله')
})
httpServer.listen(port,host,()=>{
    const message= `Server is up @ http://${host}:${port}`
    logger.info(`Server is Live and runing version is ${version}`)
    
    console.log(message)
})