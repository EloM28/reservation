import executeQuery from "@/config/db";

export default async function handler(req,res){
    try{
       const{roomNumber,category,status,price,description}=req.body
       const roominsert=await executeQuery("INSERT INTO chambre (numChambre,TypeChambre,PrixNuit,EtatChambre,Description) VALUES(?,?,?,?,?)",[roomNumber,category,price,status,description])
       console.log("ea",roominsert);
       res.status(200).json({data:roominsert})
    }
    catch(error){
        console.log(error);
    }
    
}