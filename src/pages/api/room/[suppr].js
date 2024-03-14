import executeQuery from "@/config/db";

export default async function handler(req,res){
    try{
      console.log('res1',req.query);
    const {suppr}=req.query
    const result=await executeQuery("DELETE FROM chambre WHERE ID_Chambre=?",[suppr]);
    console.log('res2',result);
    res.status(201).json({data:result})
    }
    catch(error){
        console.log(error);
    }
    
}