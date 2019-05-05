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
    
    const match = matchNewFriend(newFriend);
    friendsData.push(newFriend);
    res.send(match);
})


const matchNewFriend = (newFriend)=>{
    const newScores = newFriend.scores;
    let match = friendsData[0],//ensure match is found
        minTotalDiff=41;//max diff is 40 
    friendsData.forEach(friend=>{
        try{
            thisDiff = diff(newScores,friend.scores);
            if(thisDiff<minTotalDiff){
                minTotalDiff = thisDiff;
                match = friend
            }
        }catch(err){
            console.error(err);
        }
    })
    return match;
}
const diff = (score1,score2)=>{
    let totalDiff=0;
    if (score1.length !== score2.length) throw "length doesn't match!"
    for (var i=0;i<score1.length;i++){
        totalDiff += Math.abs(score1[i]-score2[i]);
    }
    return totalDiff;
}



module.exports = router;