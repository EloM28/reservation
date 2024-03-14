import executeQuery from "@/config/db";

 async function handler(req,res){
    try{
        console.log('re',req.body);
       const{roomNumber,category,status,price,description}=req.body.formData
       const modId=req.body.modId
    const dataUpdate=await executeQuery("UPDATE chambre SET numChambre=?,TypeChambre=?,PrixNuit=?,EtatChambre=?,Description=? WHERE ID_Chambre=?",[roomNumber,category,price,status,description,modId])
    res.status(201).json({data:dataUpdate})
    }
    catch(error){
        console.log(error);
    }
    
} 
export default handler