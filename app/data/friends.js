var friendsData = require('./friendsData.json');
console.log(friendsData);
const fs = require('fs');
const path = require('path')


const pushtoData = (newData)=>{
    friendsData.push(newData);
    try{
        fs.writeFileSync(path.join(__dirname+'/friendsData.json'),JSON.stringify(friendsData));
        console.log("successfully write")
    }catch(err){
        throw err;
    }
}

module.exports = {
    friendsData: friendsData,
    pushtoData:pushtoData
}
