import io from 'socket.io-client';
import {URL_BASE} from '../libs/constant'

const socket = io(URL_BASE);

socket.on('connect', ()=>{
    console.log('connect to server success')
})

socket.on('disconnect', ()=>{
    console.log('disconnect')
})

export default socket;
