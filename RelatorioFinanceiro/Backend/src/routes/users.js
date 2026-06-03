var express = require('express');
var router = express.Router();
const pool = require('../DB/config');
const ValidationCPF = require('../Function/CPFValidation');
const bcrypt = require('bcryptjs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.json(
    {
      message: 'The server is runing',
      status:200,
      success:true
    }
  );
}); 
router.post("/",async function(req,res){
  try{
    const { CPF,Name,password } = req.body;
    if(!CPF||!Name||!password){
      return res.status(400).json(
        {
          Message:"Null Values",
          Status:400,
          Success:false
        }
      )
    } else if(!ValidationCPF(CPF)){
      return res.status(400).json(
        {
          Message:"Invalid CPF",
          Status:400,
          Success:false
        }
      )
    }
    CPFquery = await pool.query('SELECT id FROM "Users" WHERE "CPF"=$1 LIMIT 1',[CPF]);
    if(CPFquery.rows.length){
      return res.status(409).json({
        Message:"CPF already registered",
        Status:409,
        Success:false
      })
    }
    else{
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO "Users" ("CPF","Name","Password") VALUES ($1,$2,$3) RETURNING id',
        [CPF,Name,hashedPassword]
      );
      return res.status(200).json({
        Message:"Sign-in successfully",
        Status:200,
        Success:true
      })
    }
  }catch(e){
    console.log(e)
    return res.status(500).json({
      Message:"Internal Error",
      Status:500,
      Success:false
    })
  }
})

module.exports = router;