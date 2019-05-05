const express = require('express');
const friendsData = require("../data/friends.js") 

router = express.Router();
router.get("/friends",(req,res)=>{    
    res.send(friendsData);
});

router.post("/friends",(req,res,next)=>{
    const newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: [req.body.group1,req.body.group2,req.body.group3,req.body.group4,req.body.group5,req.body.group6]
        }
    friendsData.push(newFriend);
    console.log(newFriend);
    res.send(newFriend);
})




module.exports = router;