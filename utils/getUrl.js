const findCategory = require('./findCategory')

function getUrl(req, res) {
    const {amount, category, difficulty, type} = req.body
    let url = require('../data/data.json').url
    if(!amount){
        res.status(400).send(`Can't find required fields`);
        return ;
    }
    else{
        url += `amount=${amount}`;
    }
    if(category && category !== "any"){
        url += `&category=${findCategory(category)}`;
    }
    if(difficulty && difficulty !== "any"){
        url += `&difficulty=${difficulty}`;
    }
    if(type && type !== "any"){
        url += `&type=${type}`;
    }
    res.send(url)
}

module.exports = getUrl