const trivia_categories = require('../data/data.json').trivia_categories

function findCategory(category){
    for(let i = 0; i < trivia_categories.length; i++){
        if(trivia_categories[i].name === category){
            return trivia_categories[i].id
        }
    }
}

module.exports = findCategory