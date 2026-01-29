import express from 'express';
import mongoose from "mongoose"

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
    connectDatabase(){
        try{
            await mongoose.connect("")
            console.log("Database Connected")
        } catch (err){
            console.log("URL Not Found")
        }
    }
    initializeRoutes():void{}

}