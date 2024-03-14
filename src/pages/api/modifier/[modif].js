import executeQuery from "@/config/db";

export default async function handler(req,res){
    const {modif}=req.query;
        const donne=await executeQuery('SELECT * FROM chambre WHERE ID_Chambre=?',[modif]);
        res.status(200).json({data:donne})
    
    
}