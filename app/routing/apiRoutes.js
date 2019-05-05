const express = require('express');



router = express.Router();
router.get("/friends",(req,res)=>{
    res.send("get");
});
router.post("/friends",(req,res)=>{
    console.log(req.body);
    res.send("post")
})


module.exports = router;