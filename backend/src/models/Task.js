import mongoose, { Schema } from "mongoose"

//Esquema
const Esquema=mongoose.Schema(

    {
        correo: { type: String, trim: true },
        alias: {type: String, trim: true},
        comentarios:{type: String, trim: true}
      },
      {
        timestamps: true,// agrega automáticamente los campos createdAt y updatedAt al documento para registrar la fecha y hora de creación y actualización.
        versionKey: false,//evita la adición del campo __v que se utiliza para el control de versiones de documentos en MongoDB.
      }
  

)

export default mongoose.model("Task",Esquema)