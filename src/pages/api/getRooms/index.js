import executeQuery from "@/config/db";

export default async function handler(req,res){
    const donne=await executeQuery('SELECT * FROM chambre',[]);
    console.log(donne);
    res.status(200).json({data:donne})
}