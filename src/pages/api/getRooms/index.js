import executeQuery from "@/config/db";

export default async function handler(req,res){
    const donne=await executeQuery('SELECT * FROM chambre',[]);
    res.status(200).json({data:donne})
}