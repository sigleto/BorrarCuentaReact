import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routes/routes.js"
import dotenv from 'dotenv'


dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => {
    console.log("Conectado a la base de datos de MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos:", error);
  });


app.use(cors())

app.use(express.json()) 
app.use(router) 

   
//Implementa "text" para que express pueda interpretar el texto,json o formularios que se envia con "req" ose recibe con "res"
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(process.env.PORT||3000,()=>console.log("escuchando en 3000"))
 