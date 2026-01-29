import express from 'express';
import mongoose from "mongoose"
import {useRoutes} from "./controller/todo.controllers";

interface App_Interface{
    startServer():void;
    connectDatabase():void;
    initializeRoutes():void;

}

export class App implements App_Interface{

    PORT:number;
    app:express.Application;

    constructor(){
        this.PORT=3000;
        this.app= express();
        this.startServer();
        this.initializeRoutes();
    }


    startServer():void{
        this.app.listen(this.PORT,()=>{
            console.log("Server chalu hoyaa")
        })
    }
    async connectDatabase(){
        try{
            await mongoose.connect("")
            console.log("Database Connected")
        } catch (err){
            console.log("URL Not Found")
        }
    }
    initializeRoutes():void{}

}