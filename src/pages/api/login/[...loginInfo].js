import executeQuery from "@/config/db"

export default async function handler(req,res) {
    try {
        console.log("src",req.query);
  const [email,password]=req.query.loginInfo
  const donne=await executeQuery('SELECT * FROM employe WHERE email=? AND password=?',[email,password]);
    console.log(donne[0]);
    if(donne[0]!=undefined){
      console.log('US',donne[0]);
      res.status(200).json({response:{data:donne[0],message:'success'}})
    }
    else
    res.status(404).json({response:{message:"failed"}})
    } catch (error) {
      console.log("With the Error",error);  
    }
    
}
