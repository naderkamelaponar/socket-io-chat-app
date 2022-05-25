import { Server,Socket } from "socket.io";
import logger from './utils/logger'
const EVENTS ={
    connection:'connection'
}
function socket ({io}:{io:Server}){
    logger.info(`Socket is working`)
    io.on (EVENTS.connection,(socket:Socket)=>{
        logger.info(`User connect ${socket.id}`)
    })
}
export default socket