const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.end('Hola mundo');
})

module.exports = router